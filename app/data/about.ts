export interface StoryItem {
  hash: string
  label: string
  title: string
  description: string
}

export const story: StoryItem[] = [
  {
    hash: 'HEAD',
    label: 'Ahora',
    title: 'Buscando rol fullstack / cloud  || Dev Creative ',
    description:
      'Estructura rígida para el sistema, adaptabilidad orgánica para la interfaz.'
  },
  {
    hash: 'a1f3c9e',
    label: 'Instituto Tecnológico de Morelia',
    title: 'Ingeniería en Sistemas Computacionales',
    description:
      'Último semestre, con la residencia profesional como requisito final.'
  },
  {
    hash: 'c85e1b2',
    label: 'EROS',
    title: 'Mi agencia digital',
    description:
      'Páginas web y bots de WhatsApp para negocios locales de Morelia.'
  },
  {
    hash: '7b20d4a',
    label: 'Gobierno Digital de Morelia',
    title: 'De fullstack a QA automation',
    description:
      'Empecé construyendo producto y los últimos ~6 meses automaticé pruebas con Playwright, Selenium y pytest.'
  }
]
