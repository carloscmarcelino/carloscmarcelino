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

export const ProjectsSection = () => (
  <section className="flex flex-col py-40 gap-5">
    <p className="text-white text-title font-bold">Projetos</p>
    <Carousel className="flex flex-col gap-5">
      <CarouselContent>
        {[
          {
            title: 'Profrotas-pdv',
            description:
              'Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
            image: '/assets/projects/projetoProfrotasPdv.png',
            gradient: 'bg-gradient-to-b from-black to-transparent',
            url: 'https://profrotas-pdv.vercel.app/login',
          },
        ].map((project, index) => (
          <CarouselItem key={index}>
            <Link href={project.url} target="_blank">
              <motion.div
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                whileHover="hover"
                className="relative flex flex-col justify-between gap-5 p-10 h-[30rem] w-[30rem] text-white bg-cover bg-no-repeat bg-center rounded-xl"
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
  </section>
);