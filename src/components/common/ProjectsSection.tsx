
'use client'

import Image from 'next/image'

// Tipagem para os projetos
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  size: 'large' | 'small'
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Pro",
    description: "Plataforma completa com Next.js 15 e Stripe.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
    size: 'large'
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Painel de controle para monitoramento de modelos de IA.",
    tags: ["React", "Python", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
    size: 'small'
  },
  {
    id: 3,
    title: "Fintech App",
    description: "App de finanças com foco em UX/UI.",
    tags: ["React Native", "Expo"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
    size: 'small'
  }
]

const unsplashImages = [
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
  'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800',
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800'
]

export default function ProjectsSection() {
  return (
    <section className="py-14 px-6 lg:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto bg-white border-2 border-t-0 border-slate-200 px-8 py-10 rounded-2xl">
        <h2 className=" z-10 -top-6 text-4xl font-bold text-slate-900 mb-4">Projetos em Destaque</h2>
        <div className='flex gap-2'>
          {
            projects.map(project => (
              <div key={project.id} className='flex justify-between gap-6 max-w-1/3 bg-slate-100 p-4 rounded-lg aspect-2/1'>
                <Image src={project.image} alt={project.title} width={200} height={200} className='rounded-2xl object-cover' />
                <p>{project.description}</p>
              </div>
            ))
          }
        </div>
        {/* Detalhes do projeto em destaque */}
        <div className='bg-slate-50 flex gap-4 flex-col mt-2 rounded-lg p-10'>
          <div className='flex gap-2 items-center'>
            <Image src={projects[0].image} alt={projects[0].title} width={70} height={70} className='rounded-full aspect-square p-1 object-cover' />
            <h2 className='text-5xl font-bold'>{projects[0].title}</h2>
          </div>
          <p className='text-lg text-slate-600 '>
            {projects[0].description}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consequuntur eligendi optio quo, amet quibusdam magnam dolorem. Reiciendis repudiandae tempore placeat harum ducimus illo. Illo enim sint cum tempora fugiat?
          </p>
          {/* Características */}
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white py-4 px-6 flex flex-col rounded-2xl'>
              <h3>Features</h3>
              <ul className='list-disc list-inside'>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <div className='bg-white py-4 px-6 flex flex-col rounded-2xl'>
              <h3>Features</h3>
              <ul className='list-disc list-inside'>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <div className='bg-white py-4 px-6 flex flex-col rounded-2xl'>
              <h3>Features</h3>
              <ul className='list-disc list-inside'>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
          </div>

          {/* Galeria de Imagens */}
          <div className='aspect-16/6 grid grid-cols-5 gap-2 grid-rows-3 bg-white p-2 rounded-2xl w-full'>
            <div className='col-span-3 row-span-3 relative'>
              <Image src={projects[0].image} alt={projects[0].title} fill className='object-cover rounded-2xl' />

            </div>
            {
              unsplashImages.slice(0, 6).map((img, index) => (
                <div key={index} className='relative w-full h-full rounded-lg overflow-hidden'>
                  <Image src={img} alt={`Imagem ${index + 1}`} fill className='object-cover' />
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </section>
  )
}