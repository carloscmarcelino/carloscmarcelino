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
  title: 'Projetos',
  projects: [
    {
      title: 'Moura Dubeux',
      description:
        'Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      image: '/assets/projects/projetoMoura.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://www.mouradubeux.com.br/pernambuco/recife/boa-viagem/residenciais-condominio/3-quartos/ayme-boa-viagem',
    },
    {
      title: 'Profrotas-pdv',
      description:
        'Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      image: '/assets/projects/projetoProfrotasPdv.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://profrotas-pdv.vercel.app/login',
    },
    {
      title: 'Papo de Cabeça',
      description:
        'Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      image: '/assets/projects/projetoAnima.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://www.papodecabeca.com.br',
    },
    {
      title: 'Profrotas Website',
      description:
        'Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      image: '/assets/projects/projetoProfrotasWebsite.png',
      gradient: 'bg-gradient-to-b from-dark3 from-0% to-transparent to-70%',
      url: 'https://profrotas-website.vercel.app/',
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
    className="flex flex-col py-40 gap-5"
  >
    <p className="text-white text-title font-bold">{data.title}</p>
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
                className="relative flex flex-col justify-between gap-5 p-10 h-[30rem] w-[45rem] text-white bg-cover bg-no-repeat bg-center rounded-xl"
              >
                {project.gradient && (
                  <div className={cn('absolute left-0 bottom-0 w-full h-full', project.gradient)} />
                )}

                <div className="flex flex-col">
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
                    className="text-title z-10"
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
                    className="text-description z-10"
                  >
                    {project.description}
                  </motion.p>
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
