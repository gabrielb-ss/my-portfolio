
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
    <section className="py-14 px-6 lg:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto bg-white border-2 border-t-0 border-slate-200 px-8 py-10 rounded-2xl">
        <h2 className=" z-10 -top-6 text-4xl font-bold text-slate-900 mb-4">Projetos em Destaque</h2>
        <div className='flex gap-2'>
          {
            projects.map((project, index) => (
              <div key={index} onClick={() => setActiveProjectIdx(index)} className={`group flex justify-between max-w-1/3 bg-slate-100 p-4 rounded-lg hover:ring-3 hover:ring-slate-300 aspect-2/1 transition-all cursor-pointer ${activeProjectIdx === index && 'ring-3 ring-slate-400!'}`}>
                <div className='w-1/2 relative overflow-hidden rounded-2xl'>
                  <Image src={project.icon} alt={project.title} quality={20} fill className='rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300' />
                </div>
                <div className='ms-2 w-1/2 h-full flex flex-col'>
                  <h3 className='font-bold text-lg'>{project.title}</h3>
                  <p className='overflow-hidden text-ellipsis'>{project.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        {/* Detalhes do projeto em destaque */}
        <div className='bg-slate-50 flex gap-4 flex-col mt-2 rounded-lg p-10'>
          <h2 className='text-5xl font-bold'>{projects[activeProjectIdx].title}</h2>
          <p className='text-lg text-slate-600 '>
            {projects[activeProjectIdx].description}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consequuntur eligendi optio quo, amet quibusdam magnam dolorem. Reiciendis repudiandae tempore placeat harum ducimus illo. Illo enim sint cum tempora fugiat?
          </p>
          {/* Características */}
          <div className='grid grid-cols-3 gap-4'>
            {
              projects[activeProjectIdx].details.map((detail, index) => (
                <div key={index} className='bg-white p-4 rounded-lg border border-slate-200'>
                  <h3 className='font-bold text-lg mb-2'>{detail.title}</h3>
                  <ul className='list-disc list-inside text-slate-600'>
                    {detail.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>

          {/* Galeria de Imagens */}
          <div className='aspect-16/6 grid grid-cols-5 gap-2 grid-rows-3 bg-white p-2 rounded-2xl w-full'>
            <div className='col-span-3 row-span-3 relative'>
              <Image src={projects[activeProjectIdx].gallery[selectedImageIdx]} alt={projects[activeProjectIdx].title} fill draggable={false} className='object-cover rounded-2xl cursor-pointer' />

            </div>
            {
              projects[activeProjectIdx].gallery.map((img, index) => (
                <div key={index} style={{ display: index !== selectedImageIdx ? 'block' : 'none' }} onClick={() => setSelectedImageIdx(index)} className='relative w-full h-full rounded-lg overflow-hidden cursor-pointer'>
                  <Image src={img} draggable={false} quality={20} alt={`Imagem ${index + 1}`} fill className='object-cover hover:scale-110 transition-transform duration-300' />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}