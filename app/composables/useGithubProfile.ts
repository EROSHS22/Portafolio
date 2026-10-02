export interface GithubLanguage {
  name: string
  percent: number
}

export interface GithubRepo {
  name: string
  url: string
  language: string | null
  pushedAgo: string
}

export interface GithubProfile {
  login: string
  name: string
  bio: string | null
  location: string | null
  avatarUrl: string
  url: string
  publicRepos: number
  followers: number
  sinceYear: number
  languages: GithubLanguage[]
  recentRepos: GithubRepo[]
}

interface UserDto {
  login: string
  name: string | null
  bio: string | null
  location: string | null
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  created_at: string
}

interface RepoDto {
  name: string
  html_url: string
  fork: boolean
  language: string | null
  pushed_at: string
}

const API = 'https://api.github.com'
const HEADERS = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28'
}

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 31_536_000],
  ['month', 2_592_000],
  ['day', 86_400],
  ['hour', 3_600],
  ['minute', 60]
]

function formatAgo(iso: string): string {
  const seconds = (Date.now() - new Date(iso).getTime()) / 1000
  const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })
  for (const [unit, size] of UNITS) {
    if (seconds >= size) return rtf.format(-Math.floor(seconds / size), unit)
  }
  return 'justo ahora'
}

function toProfile(user: UserDto, repos: RepoDto[]): GithubProfile {
  const own = repos.filter((repo) => !repo.fork)

  const counts = new Map<string, number>()
  for (const repo of own) {
    if (repo.language)
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1)
  }
  const total = [...counts.values()].reduce((sum, n) => sum + n, 0)

  const languages = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, n]) => ({ name, percent: Math.round((n / total) * 100) }))

  const recentRepos = own.slice(0, 3).map((repo) => ({
    name: repo.name,
    url: repo.html_url,
    language: repo.language,
    pushedAgo: formatAgo(repo.pushed_at)
  }))

  return {
    login: user.login,
    name: user.name ?? user.login,
    bio: user.bio,
    location: user.location,
    avatarUrl: user.avatar_url,
    url: user.html_url,
    publicRepos: user.public_repos,
    followers: user.followers,
    sinceYear: new Date(user.created_at).getUTCFullYear(),
    languages,
    recentRepos
  }
}

export function useGithubProfile() {
  const { githubUser } = useRuntimeConfig().public

  return useAsyncData<GithubProfile>(
    `github-profile-${githubUser}`,
    async () => {
      // Dos peticiones en paralelo, no una tras otra.
      const [user, repos] = await Promise.all([
        $fetch<UserDto>(`${API}/users/${githubUser}`, {
          headers: HEADERS,
          timeout: 8000
        }),
        $fetch<RepoDto[]>(`${API}/users/${githubUser}/repos`, {
          headers: HEADERS,
          query: { per_page: 100, sort: 'pushed', type: 'owner' },
          timeout: 8000
        })
      ])
      return toProfile(user, repos)
    },
    {
      getCachedData: (key, nuxtApp) =>
        nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
    }
  )
}
