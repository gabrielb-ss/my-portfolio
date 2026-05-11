
'use client'

import { img } from 'motion/react-client'
import Image from 'next/image'
import { useState } from 'react'

// Tipagem para os projetos
interface Project {
  title: string
  description: string
  tags: string[]
  icon: string
  size: 'large' | 'small'
  details: {
    title: string
    items: string[]
  }[]
  gallery: string[]
}

const projects: Project[] = [
  {
    title: 'Dashboard Financeiro',
    description:
      'Plataforma para controle de receitas, despesas e metas com gráficos em tempo real.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    icon:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
    size: 'large',
    details: [
      {
        title: 'Funcionalidades',
        items: ['Resumo mensal', 'Alertas de orçamento', 'Exportação em PDF'],
      },
      {
        title: 'Diferenciais',
        items: ['Tema escuro', 'Filtros avançados', 'UI responsiva'],
      },
      {
        title: 'Diferenciais',
        items: ['Tema escuro', 'Filtros avançados', 'UI responsiva'],
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1517249388628-2f8e5f3d6d8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80',
    ],
  },
  {
    title: 'E-commerce de Moda',
    description:
      'Loja virtual com catálogo dinâmico, carrinho persistente e fluxo de checkout otimizado.',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    icon:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
    details: [
      {
        title: 'Funcionalidades',
        items: ['Busca inteligente', 'Variações de produto', 'Checkout seguro'],
      },
      {
        title: 'Resultados',
        items: ['Menor abandono de carrinho', 'Carregamento rápido', 'SEO técnico'],
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15d4a1c9e?w=1200&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1200&q=80',
    ],
  },
  {
    title: 'App de Treinos',
    description:
      'Aplicativo para planejamento de treinos com acompanhamento de progresso e metas semanais.',
    tags: ['React Native', 'Expo', 'Firebase', 'Zustand'],
    icon:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    size: 'small',
    details: [
      {
        title: 'Funcionalidades',
        items: ['Plano personalizado', 'Histórico de exercícios', 'Notificações'],
      },
      {
        title: 'Engajamento',
        items: ['Sistema de streak', 'Metas por período', 'Dashboard de evolução'],
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
      'https://images.unsplash.com/photo-1526406915896-5e0f5d5d5f9c?w=1200&q=80',
      'https://images.unsplash.com/photo-1508873696983-2dfd5898f1d5?w=1200&q=80',
      'https://images.unsplash.com/photo-1515165562835-cb0b9f4f9a2d?w=1200&q=80',
    ],
  },
]

export default function ProjectsSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0)
  const [selectedImageIdx, setSelectedImageIdx] = useState(0)

  return (
    <section className="py-4 px-2 lg:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto bg-white px-4 py-6 lg:px-8 lg:py-10 rounded-lg">
        <h2 className=" z-10 -top-6 lg:text-4xl text-2xl font-bold text-slate-900 mb-4">Projetos em Destaque</h2>
        <div className='flex gap-2'>
          {
            projects.map((project, index) => (
              <div key={index} onClick={() => setActiveProjectIdx(index)} className={`group flex flex-col lg:flex-row justify-center w-1/3 bg-slate-100 lg:p-4 rounded-lg hover:ring-3 hover:ring-slate-300 lg:aspect-2/1 transition-all cursor-pointer ${activeProjectIdx === index && 'ring-3 ring-slate-300'}`}>
                <div className='lg:w-1/2 w-full relative aspect-square overflow-hidden rounded-t-lg lg:rounded-b-lg'>
                  <Image src={project.icon} alt={project.title} quality={50} fill className=' object-cover group-hover:scale-110 transition-transform duration-300' />
                </div>
                <div className='ms-2 lg:w-1/2 h-1/3 lg:h-full flex flex-col w-full justify-center'>
                  <h3 className='font-bold lg:text-lg text-xs'>{project.title}</h3>
                  <p className='overflow-hidden hidden lg:block text-ellipsis'>{project.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        {/* Detalhes do projeto em destaque */}
        <div className='bg-slate-50 flex gap-2 lg:gap-4 flex-col mt-2 rounded-lg px-5 py-3 lg:p-10'>
          <h2 className='lg:text-5xl text-2xl font-bold'>{projects[activeProjectIdx].title}</h2>
          <p className='text-md lg:text-lg text-justify leading-snug lg:leading-relaxed lg:text-left text-slate-600 '>
            {projects[activeProjectIdx].description}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consequuntur eligendi optio quo, amet quibusdam magnam dolorem. Reiciendis repudiandae tempore placeat harum ducimus illo. Illo enim sint cum tempora fugiat?
          </p>
          {/* Características */}
          <div className='flex flex-col lg:flex-row lg:gap-4 gap-1.5'>
            {
              projects[activeProjectIdx].details.map((detail, index) => (
                <div key={index} className='bg-white px-4 lg:py-4 py-2 lg:w-1/3 rounded-lg border border-slate-200 '>
                  <h3 className='font-bold text-md lg:text-lg lg:mb-2'>{detail.title}</h3>
                  <ul className='lg:list-disc list-inside text-slate-600 flex lg:flex-col flex-wrap gap-1 lg:gap-0 lg:text-lg text-sm'>
                    {detail.items.map((item, itemIndex) => (
                      <li className='bg-slate-100 lg:bg-transparent lg:px-0 px-1 rounded-lg' key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>

          {/* Galeria de Imagens */}
          <div className='lg:flex grid grid-rows-2 bg-white p-2 gap-2 rounded-lg w-full'>
            <div className='lg:w-2/3 w-full aspect-video relative'>
              <Image src={projects[activeProjectIdx].gallery[selectedImageIdx]} alt={projects[activeProjectIdx].title} fill draggable={false} className='object-cover rounded-lg cursor-pointer' />
            </div>
            <div className='lg:w-1/3 w-full grid grid-cols-3 lg:grid-cols-2 gap-2'>
              {
                projects[activeProjectIdx].gallery.map((img, index) => (
                  <div key={index} style={{ display: index !== selectedImageIdx ? '' : 'none' }} onClick={() => setSelectedImageIdx(index)} className='relative w-full rounded-lg overflow-hidden cursor-pointer'>
                    <Image src={img} draggable={false} quality={50} alt={`Imagem ${index + 1}`} fill className='object-cover hover:scale-110 transition-transform duration-300' />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}