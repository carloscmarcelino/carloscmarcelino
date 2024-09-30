import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { CarouselIndicators } from '@/components/CarouselIndicators';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const data = {
  title: 'Em destaque',
  projects: [
    {
      title: 'Moura Dubeux',
      description:
        'Criação do novo website da Moura Dubeux, uma das maiores construtoras do Brasil, focado em desempenho, garantindo carregamento rápido e uma indexação eficiente no Google, atendendo às necessidades de SEO.',
      image: '/assets/projects/projetoMoura.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://www.mouradubeux.com.br/pernambuco/recife/boa-viagem/residenciais-condominio/3-quartos/ayme-boa-viagem',
    },
    {
      title: 'Profrotas-pdv',
      description:
        'Desenvolvimento do sistema Profrotas, uma solução de gestão de abastecimento 100% digital do Posto Ipiranga.',
      image: '/assets/projects/projetoProfrotasPdv.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://profrotas-pdv.vercel.app/login',
    },
    {
      title: 'Profrotas Website',
      description: 'Criação do Website para o Profrotas',
      image: '/assets/projects/projetoProfrotasWebsite.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://profrotas-website.vercel.app/',
    },
    {
      title: 'Papo de Cabeça',
      description: 'Desenvolvimento da plataforma de educação Papo de Cabeça.',
      image: '/assets/projects/projetoAnima.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://www.papodecabeca.com.br',
    },
  ],
};

export const ProjectsSection = () => (
  <motion.section
    viewport={{ amount: 0.2, once: true }}
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      ease: [0.645, 0.045, 0.355, 1],
      duration: 1,
    }}
    className="flex flex-col py-20 lg:py-40 gap-5"
  >
    <p className="text-white text-title font-bold">{data.title}</p>
    <p className="text-white text-description mb-6 max-w-[40rem]">
      Como desenvolvedor na{' '}
      <Link href="https://loomi.digital/en/" target="_blank">
        Loomi
      </Link>{' '}
      participei em mais de 15 projetos.
    </p>
    <Carousel className="flex flex-col gap-5">
      <CarouselContent>
        {data.projects.map((project, index) => (
          <CarouselItem key={index}>
            <Link href={project.url} target="_blank">
              <motion.div
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                whileHover="hover"
                className="relative flex flex-col justify-between gap-4 lg:gap-5 p-5 lg:p-10 h-[30rem] w-[22rem] lg:w-[45rem] text-white bg-cover bg-no-repeat bg-center rounded-xl"
              >
                {project.gradient && (
                  <div className={cn('absolute left-0 bottom-0 w-full h-full', project.gradient)} />
                )}

                <div className="flex flex-col gap-4 lg:gap-0">
                  <motion.p
                    initial={{
                      opacity: 1,
                      y: 50,
                    }}
                    variants={{
                      hover: {
                        opacity: 0,
                        y: 0,
                      },
                    }}
                    transition={{
                      ease: [0.645, 0.045, 0.355, 1],
                      duration: 0.5,
                    }}
                    className="hidden lg:block text-title z-10"
                  >
                    {project.title}
                  </motion.p>
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    variants={{
                      hover: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      ease: [0.645, 0.045, 0.355, 1],
                      duration: 0.5,
                    }}
                    className="hidden lg:block text-description z-10"
                  >
                    {project.description}
                  </motion.p>

                  <p className="lg:hidden text-title z-10">{project.title}</p>
                  <p className="lg:hidden text-description z-10">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-4 self-end mr-6 lg:mr-20">
        <CarouselPrevious />
        <CarouselIndicators />
        <CarouselNext />
      </div>
    </Carousel>
  </motion.section>
);
