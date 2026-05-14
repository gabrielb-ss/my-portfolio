'use client'

import Image from 'next/image'
import { useState } from 'react'

// Tipagem para os projetos
interface Project {
  title: string
  summary: string
  url: string
  description: string
  icon: string
  details: {
    title: string
    items: string[]
  }[]
  gallery: string[]
}

const projects: Project[] = [
  {
    title: 'Cantina Digital',
    url: 'https://cantina.ensv.com.br',
    summary: 'Sistema completo para cantinas escolares, com aplicativo para pais, PDV e dashboard administrativo',
    description:
      'Sistema contruído do zero para substituir o pagamento via Pix em cantinas escolares. No aplicativo dos pais, é possível recarregar créditos, visualizar o histórico de transações e controlar os gastos dos filhos. No módulo da cantina, a venda é feita com autenticação facial ou por tag RFID, eliminando a necessidade de dinheiro físico e agilizando o processo de compra. Já o dashboard administrativo oferece controle total sobre as operações, com relatórios de vendas em tempo real e gerenciamento de usuários. O sistema foi feito para ser uma solução completa, eficiente e de baixo custo para cantinas escolares.',
    icon:
      '/cantina.png',
    details: [
      {
        title: 'Funcionalidades',
        items: ['Recargas via Pix', 'Compra por reconhecimento facial', 'Compra por Tag RFID', 'Dashboard administrativo', 'Controle de gastos', 'Histórico de transações'],
      },
      {
        title: 'Competências Desenvolvidas',
        items: ['Desenvolvimento full-stack', 'Levantamento de requisitos', 'Integração API Pix e Siga', 'Otimização de performance', 'Desenvolvimento end-to-end', 'Testes unitários e de integração'],
      },
      {
        title: 'Diferenciais e resultados',
        items: ['PWA para dispositivos móveis', 'Zero custo operacional', 'Zero tarifas', 'Relatórios de vendas em tempo real', 'Redução de filas e aglomerações', 'Satisfação dos usuários'],
      },
    ],
    gallery: [
      '/cantina/1.png',
      '/cantina/2.png',
      '/cantina/3.png',
      '/cantina/4.png',
      '/cantina/5.png',
      '/cantina/6.png',
    ],
  },
  {
    title: 'Vivulgo',
    url: 'https://vivulgo.vercel.app',
    summary: 'Projeto de faculdade para criar uma plataforma de links personalizada, similar ao Linktree, com foco em design e usabilidade',
    description:
      'Projeto acadêmico desenvolvido para criar uma plataforma de links personalizada, similar ao Linktree, com foco em design e usabilidade. O Vivulgo permite que os usuários criem um perfil personalizado com links para suas redes sociais, portfólio e outros conteúdos relevantes. O projeto foi desenvolvido utilizando Next.js para o frontend e Supabase para o backend, com autenticação via Google e e-mail. O design responsivo garante uma experiência fluida em dispositivos móveis e desktops, enquanto as funcionalidades de personalização permitem que os usuários criem um perfil único e atraente.',
    icon:
      '/vivulgoIcon.png',
    details: [
      {
        title: 'Funcionalidades',
        items: ['Criação e edição de links', 'Edição de perfil', 'Personalização de plano de fundo', 'Autenticação via Google ou e-mail', 'Compartilhamento nativo de perfil'],
      },
      {
        title: 'Competências Desenvolvidas',
        items: ['Trabalho em equipe', 'Desenvolvimento full-stack', 'Integração com APIs de autenticação', 'Responsividade', 'Testes unitários e de integração'],
      },
    ],
    gallery: [
      '/vivulgo/10.png',
      '/vivulgo/1.png',
      '/vivulgo/2.png',
      '/vivulgo/3.png',
      '/vivulgo/4.png',
    ],
  },
  {
    title: 'Assistente de campo',
    url: 'https://assistente-de-campo-pwa.vercel.app/',
    summary: 'Aplicação mobile para biólogos organizarem seus trabalhos de campo, com funcionalidades de registro de observações e exportação de dados',
    description:
      'Aplicação PWA desenvolvida para biólogos organizarem seus trabalhos de campo, com funcionalidades de registro de observações e exportação de dados para planilhas. O assistente de campo permite que os usuários registrem suas observações e organizem seus dados de forma eficiente, mesmo sem conexão com a internet. A aplicação foi construída utilizando React para o frontend e IndexedDb para o armazenamento local, garantindo uma experiência fluida e responsiva em diversos dispositivos. A funcionalidade de exportação de dados para planilhas facilita a análise e compartilhamento das informações coletadas durante os trabalhos de campo.',
    icon:
      '/ascamIcon.png',
    details: [
      {
        title: 'Funcionalidades',
        items: ['Funcionamento offline', 'Exportação de dados', 'Registro de observações com fotos', 'Design simples e intuitivo', 'Persistência local de dados', 'Compatibilidade com diversos dispositivos'],
      },
      {
        title: 'Competências Desenvolvidas',
        items: ['Prototipagem rápida', 'Design de interface', 'Testes de usabilidade', 'Iteração baseada em feedback'],
      },
    ],
    gallery: [
      '/assistente/1.png',
      '/assistente/2.png',
      '/assistente/3.png',
      '/assistente/4.png',
    ],
  },
]

export default function ProjectsSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0)
  const [selectedImageIdx, setSelectedImageIdx] = useState(0)

  return (
    <section className="py-4 px-1 lg:px-20 bg-slate-100">
      <div className="max-w-7xl mx-auto bg-white px-3 py-4 lg:px-8 lg:py-10 rounded-lg">
        <h2 className="z-10 lg:text-4xl text-2xl font-bold text-slate-900 mb-4">Projetos em Destaque</h2>
        <div className='flex gap-2'>
          {
            projects.map((project, index) => (
              <div key={index} onClick={() => setActiveProjectIdx(index)} className={`group flex flex-col lg:flex-row justify-center w-1/3 bg-slate-100 lg:p-4 pt-2 px-1 rounded-lg hover:ring-3 hover:ring-slate-300 lg:aspect-2/1 transition-all cursor-pointer ${activeProjectIdx === index && 'ring-3 ring-slate-300'}`}>
                <div className='lg:w-1/2 w-full relative aspect-square overflow-hidden rounded-full '>
                  <Image src={project.icon} alt={project.title} quality={50} fill className='object-contain group-hover:scale-110 transition-transform duration-300 lg:p-3' />
                </div>
                <div className='lg:w-1/2 h-1/3 lg:h-full flex flex-col w-full'>
                  <h3 className='font-bold lg:text-lg mt-1 text-xs text-center lg:text-left'>{project.title}</h3>
                  <p className='overflow-hidden hidden leading-5 lg:block text-ellipsis'>{project.summary}</p>
                </div>
              </div>
            ))
          }
        </div>
        {/* Detalhes do projeto em destaque */}
        <div className='bg-slate-100 flex gap-2 lg:gap-4 flex-col mt-2 rounded-lg p-3 lg:p-10'>
          <div className='flex gap-4 items-end text-sm lg:text-xl'>
            <h2 className='lg:text-5xl text-2xl font-bold'>{projects[activeProjectIdx].title}</h2>
            <a href={projects[activeProjectIdx].url} target='_blank' className='text-blue-600 hover:underline'>Visitar Site</a>
          </div>
          <p className='text-md lg:text-lg text-justify leading-snug lg:leading-relaxed lg:text-left text-slate-600 '>
            {projects[activeProjectIdx].description}
          </p>
          {/* Características */}
          <div className='flex flex-col lg:flex-row lg:gap-4 gap-1.5'>
            {
              projects[activeProjectIdx].details.map((detail, index) => (
                <div key={index} className='bg-white px-2.5 lg:p-4 py-1.5 w-full rounded-lg border border-slate-200 '>
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
          <h3 className='lg:text-4xl text-xl leading-none mt-3 ms-1 font-bold'>Galeria</h3>
          <div className='lg:flex border border-slate-300 grid grid-rows-2 bg-slate-200 p-2 gap-2 rounded-lg w-full'>
            <div className='lg:w-2/3 w-full lg:h-[80vh] h-[50vh] relative'>
              <Image src={projects[activeProjectIdx].gallery[selectedImageIdx]} alt={projects[activeProjectIdx].title} fill draggable={false} className='object-contain rounded-lg cursor-pointer' />
            </div>
            <div className='lg:w-1/3 w-full grid border-t pt-1 lg:pt-0 lg:border-l lg:border-t-0 border-slate-50 lg:pl-2 grid-cols-3 lg:grid-cols-2 gap-2'>
              {
                projects[activeProjectIdx].gallery.map((img, index) => (
                  <div key={index} style={{ display: index !== selectedImageIdx ? '' : 'none' }} onClick={() => setSelectedImageIdx(index)} className='relative w-full rounded-lg overflow-hidden cursor-pointer'>
                    <Image src={img} draggable={false} quality={50} alt={`Imagem ${index + 1}`} fill className='object-contain hover:scale-110 transition-transform duration-300' />
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