export interface Tech {
  category: string
  name: string
  icon: string
  alt: string
}

export const techStack: Tech[] = [
  {
    category: 'Arquitectura',
    name: 'Next.js',
    icon: '/assets/tech/next.png',
    alt: 'Logo de Next.js'
  },
  {
    category: 'Motor',
    name: 'GSAP',
    icon: '/assets/tech/gsap.png',
    alt: 'Logo de GSAP'
  },
  {
    category: 'Interfaz',
    name: 'Tailwind',
    icon: '/assets/tech/tailwind.png',
    alt: 'Logo de Tailwind CSS'
  },
  {
    category: 'Nucleo',
    name: 'React',
    icon: '/assets/tech/react.png',
    alt: 'Logo de React'
  },
  {
    category: 'Logica',
    name: 'Python',
    icon: '/assets/tech/python.png',
    alt: 'Logo de Python'
  },
  {
    category: 'Backend',
    name: 'Laravel',
    icon: '/assets/tech/laravel.png',
    alt: 'Logo de Laravel'
  },
  {
    category: 'Control',
    name: 'Git',
    icon: '/assets/tech/git.png',
    alt: 'Logo de Git'
  },
  {
    category: 'Calidad',
    name: 'QA Testing',
    icon: '/assets/tech/qa-testing.png',
    alt: 'Logo de QA Testing'
  }
]
