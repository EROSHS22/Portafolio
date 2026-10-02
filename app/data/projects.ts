export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: ProjectImage
  url: string
}

export const projects: Project[] = [
  {
    id: 'validador-licencias',
    title: 'Validador de licencias Gobierno Digital',
    description:
      'Desarrollo de la interfaz operativa para el sistema de verificación estatal. Arquitectura cliente enfocada en el consumo seguro de APIs, manejo estricto de estados de error y rendimiento de la interfaz.',
    tags: ['Laravel', 'Tailwind', 'React'],
    image: {
      src: '/assets/projects/validador-licencias.webp',
      alt: 'Captura de la interfaz del validador de licencias de Gobierno Digital',
      width: 1365,
      height: 866
    },
    url: '#'
  },
  {
    id: 'interfaz-notaria',
    title: 'Interfaz corporativa: Notaría',
    description:
      'Desarrollo de plataforma comercial One-Page de alto rendimiento. Arquitectura estática enfocada en SEO técnico, tiempos de carga optimizados y diseño responsivo estricto para posicionamiento local.',
    tags: ['React', 'Tailwind', 'SEO'],
    image: {
      src: '/assets/projects/notaria.webp',
      alt: 'Captura de la página corporativa de la notaría',
      width: 1850,
      height: 891
    },
    url: '#'
  }
]
