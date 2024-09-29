'use client';

import { AboutMeSection } from '../components/AboutMeSection';
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection';

export const Public = () => (
  <main className="max-w-[1366px] mx-auto pt-60 py-40 px-20">
    <AboutMeSection />

    <ProjectsSection />

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
