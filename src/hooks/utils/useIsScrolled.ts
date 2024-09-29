import { useEffect, useState } from 'react';

export const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = document.getElementById('miniPlayerSection')?.offsetTop || 0;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= sectionTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled };
};
