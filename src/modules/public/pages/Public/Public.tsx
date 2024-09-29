'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { CarouselIndicators } from '@/components/CarouselIndicators';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { linkedinUrl } from '@/config';
import { cn } from '@/lib/utils';

export const Public = () => (
  <main className="max-w-[1366px] mx-auto py-40 px-20">
    <section className="flex flex-col">
      <div className="flex flex-col gap-5">
        <p className="text-white text-title font-bold">Hello world, Sou Carlos! 👩🏻‍💻</p>
        <p className="text-white text-description mb-6 max-w-[40rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nemo dolore, voluptas
          nisi tempora, quod obcaecati assumenda blanditiis non expedita, minus nesciunt omnis
          maiores ducimus. Corrupti, deleniti? Sapiente, tempora sit? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolorum ex laboriosam voluptatibus doloribus provident
          blanditiis iure fuga rem excepturi, corporis voluptatem praesentium cupiditate nostrum
          aliquid dolor dolore hic, ipsum eos.
        </p>
      </div>

      <div className="flex gap-5">
        <Link href={linkedinUrl} target="_blank">
          <FaLinkedinIn color="white" fontSize="1.125rem" />
        </Link>
        <Link href={linkedinUrl} target="_blank">
          <FaGithub color="white" fontSize="1.125rem" />
        </Link>
      </div>
    </section>

    <section className="flex flex-col py-40 gap-5">
      <p className="text-white text-title font-bold">Projetos</p>
      <Carousel className="flex flex-col gap-5">
        <CarouselContent>
          {[
            {
              title: 'Profrotas-pdv',
              description: '',
              image: '/assets/projects/projetoProfrotasPdv.png',
              gradient: 'bg-gradient-to-b from-black to-transparent',
              url: 'https://profrotas-pdv.vercel.app/login',
            },
          ].map((project, index) => (
            <CarouselItem key={index}>
              <motion.div
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                whileHover="hover"
                className="relative flex flex-col justify-between gap-5 p-10 h-[30rem] w-[30rem] text-white shadow-2xl bg-cover bg-no-repeat bg-center rounded-xl"
              >
                {project.gradient && (
                  <div className={cn('absolute left-0 bottom-0 w-full h-full', project.gradient)} />
                )}

                <div className="flex flex-col">
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

                <Link href={project.url} target="_blank" className="self-end z-10">
                  <Button className="w-40">Ver mais</Button>
                </Link>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-4 self-end mr-6 lg:mr-20">
          <CarouselPrevious className="border-black-dark" stroke="#000" />
          <CarouselIndicators />
          <CarouselNext className="border-black-dark" stroke="#000" />
        </div>
      </Carousel>
    </section>

    <section className="flex flex-col py-40 gap-5">
      <div className="text-white text-title font-bold">Um pouco sobre mim</div>
      <div className="flex flex-col gap-4 max-w-[40rem]">
        <p className="text-white text-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus enim quaerat
          repudiandae iure distinctio quis, nam sapiente eaque! Hic maxime dolores animi repellat
          temporibus repudiandae deserunt a iusto perspiciatis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magnam possimus enim quaerat repudiandae iure distinctio
          quis, nam sapiente eaque! Hic maxime dolores animi repellat temporibus repudiandae
          deserunt a iusto perspiciatis!
        </p>
      </div>
    </section>
  </main>
);
