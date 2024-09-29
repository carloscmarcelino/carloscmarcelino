'use client';

import { AboutMeSection } from '../components/AboutMeSection';
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection';

export const Public = () => (
  <main className="max-w-[1280px] mx-auto pt-20 lg:pt-40 px-6 lg:px-20">
    <AboutMeSection />

    <ProjectsSection />
  </main>
);
