'use client'

import ProjectsSection from '@/components/common/ProjectsSection'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'

export default function Home() {
  // Tipagem explícita para evitar erros de 'string' no ease
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" // Agora o TS reconhece como um valor válido de Variants
      },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative flex  items-center justify-center px-2 py-4 lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full bg-slate-100 p-6 lg:p-10 rounded-2xl max-w-7xl grid-cols-1 lg:gap-12 gap-4 lg:grid-cols-2 lg:items-center"
        >
          {/* Lado Esquerdo: Texto */}
          <div className="flex flex-col space-y-2 lg:space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-none text-slate-900 md:text-7xl"
            >
              Gabriel Barbosa <br />
              <span className="text-blue-600">Desenvolvedor de Sistemas</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-lg leading-5.5 lg:leading-normal text-lg text-slate-600"
            >
              Desenvolvedor Full-Stack com experiência prática no design, construção e manutenção de aplicações web.
            </motion.p>
          </div>

          {/* Lado Direito: Imagem */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-square w-full max-w-md"
          >
            {/* Elemento decorativo de fundo */}
            <motion.span
              variants={itemVariants}
              className="lg:text-sm absolute bottom-2 right-2 z-10 text-xs font-medium tracking-wide lg:px-4 lg:py-2 px-2 py-1 rounded-2xl bg-white w-fit text-blue-600 lg:uppercase"
            >
              🟢 Disponível para novos projetos
            </motion.span>

            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-blue-100" />

            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
              <Image
                src="https://avatars.githubusercontent.com/u/59917720?v=4"
                alt="Foto de Perfil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
      <ProjectsSection />
    </main>
  )
}