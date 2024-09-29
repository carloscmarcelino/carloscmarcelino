import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { linkedinUrl } from '@/config';

export const Public = () => (
  <main className="max-w-[1366px] mx-auto py-40 px-20">
    <section className="flex flex-col">
      <div className="flex flex-col gap-5">
        <p className="text-white text-title font-bold">Hello world, Sou Carlos! 👩🏻‍💻</p>
        <p className="text-white text-description mb-6 max-w-[40rem]">
          Desenvolvedor front-end desde 2022, com experiência em entregar soluções utilizando
          tecnologias como Next.js e TypeScript. Participei de projetos de grande impacto, focados
          na otimização de processos e na entrega de soluções escaláveis.
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

    <section className="flex">
      <div>Experiencias</div>
      <div />
    </section>
  </main>
);
