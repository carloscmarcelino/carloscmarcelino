import { GITHUB_URL, LINKEDIN_URL } from '@/config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const AboutMeSection = () => (
  <section className="flex justify-between">
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <motion.p
          viewport={{ amount: 0.2, once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.645, 0.045, 0.355, 1],
            duration: 1,
          }}
          className="text-white text-title font-bold"
        >
          Hello world, Sou Carlos! 👩🏻‍💻
        </motion.p>
        <motion.p
          viewport={{ amount: 0.2, once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.645, 0.045, 0.355, 1],
            duration: 1,
          }}
          className="text-white text-description mb-6 max-w-[40rem]"
        >
          Desenvolvedor front-end desde 2022, com experiência em entregar soluções utilizando
          tecnologias como Next.js e TypeScript. Participei de projetos de grande impacto, focados
          na otimização de processos e na entrega de soluções escaláveis
        </motion.p>
      </div>

      <div className="flex gap-5">
        <Link href={LINKEDIN_URL} target="_blank">
          <motion.div
            viewport={{ amount: 0.2, once: true }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: [0.645, 0.045, 0.355, 1],
              duration: 1,
            }}
          >
            <FaLinkedinIn color="white" fontSize="1.125rem" />
          </motion.div>
        </Link>
        <Link href={GITHUB_URL} target="_blank">
          <motion.div
            viewport={{ amount: 0.2, once: true }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: [0.645, 0.045, 0.355, 1],
              duration: 1,
            }}
          >
            <FaGithub color="white" fontSize="1.125rem" />
          </motion.div>
        </Link>
      </div>
    </div>

    <motion.div
      viewport={{ amount: 0.2, once: true }}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        ease: [0.645, 0.045, 0.355, 1],
        duration: 1,
      }}
    >
      <Image
        src="/assets/commons/carlos.jpg"
        alt="Carlos"
        height={300}
        width={300}
        className="rounded-sm"
      />
    </motion.div>
  </section>
);
