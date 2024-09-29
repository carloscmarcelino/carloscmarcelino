'use client';

import { AboutMeSection } from '../components/AboutMeSection';
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection';

export const Public = () => (
  <main className="max-w-[1280px] mx-auto pt-40 px-20">
    <AboutMeSection />

    <ProjectsSection />
  </main>
);
