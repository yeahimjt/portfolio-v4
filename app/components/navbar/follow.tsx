'use client';
import { CircleUser, FolderOpenDot, Layers3, Trophy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const sections = ['projects', 'experience', 'skills', 'contact'];
gsap.registerPlugin(ScrollTrigger);
const Follow = () => {
  const [active, setActive] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleActive = (to: any) => {
    console.log(to);
    setActive(to);
    sections.forEach((section) => {
      if (section !== to) {
        gsap.to(`.${section}`, {
          color: theme === 'light' ? '#999999' : '#AAAAAA',
          duration: 0.1,
          scale: '1.00',
          ease: 'power2.out',
        });
      } else {
        gsap.to(`.${section}`, {
          color: theme === 'light' ? '#666666' : '#DDDDDD',
          scale: '1.10',
          duration: 0.1,
          ease: 'power2.out',
        });
      }
    });
  };
  const handleHover = (to: any) => {
    if (to === active) return;
    gsap.to(`.${to}`, {
      color: theme === 'light' ? '#666666' : '#DDDDDD',
      scale: '1.10',
      duration: 0.1,
      ease: 'power2.out',
    });
  };
  const handleExit = (to: any) => {
    if (to === active) return;
    gsap.to(`.${to}`, {
      color: theme === 'light' ? '#999999' : '#AAAAAA',
      duration: 0.1,
      scale: '1.00',
      ease: 'power2.out',
    });
  };
  return (
    <nav className='follow:visible invisible fixed m-0 mr-12 flex h-fit flex-col gap-4 border-b border-y-light-general/50 pb-6'>
      <ScrollLink
        className='projects cursor-pointer text-light-general  hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
        to='projects'
        spy
        smooth
        offset={-90}
        duration={500}
        onSetActive={handleActive}
        onClickCapture={() => handleActive('projects')}
        onMouseEnter={() => handleHover('projects')}
        onMouseLeave={() => handleExit('projects')}
      >
        <section className='flex items-center gap-4'>
          <FolderOpenDot />
          Projects
        </section>
      </ScrollLink>
      <ScrollLink
        className='experience cursor-pointer text-light-general  transition-all hover:scale-105 hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
        to='experience'
        spy
        smooth
        offset={-90}
        duration={500}
        onSetActive={handleActive}
        onClickCapture={() => handleActive('experience')}
        onMouseEnter={() => handleHover('experience')}
        onMouseLeave={() => handleExit('experience')}
      >
        <section className='flex items-center gap-4'>
          <Trophy />
          Experience
        </section>
      </ScrollLink>
      <ScrollLink
        className='skills cursor-pointer text-light-general  transition-all hover:scale-105 hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
        to='skill'
        spy
        smooth
        offset={-90}
        duration={500}
        onSetActive={handleActive}
        onClickCapture={() => handleActive('skills')}
        onMouseEnter={() => handleHover('skills')}
        onMouseLeave={() => handleExit('skills')}
      >
        <section className='flex items-center gap-4'>
          <Layers3 />
          Skills
        </section>
      </ScrollLink>
      <Link
        className='contact cursor-pointer text-light-general  transition-all hover:scale-105 hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
        href='/contact'
        onMouseEnter={() => handleHover('contact')}
        onMouseLeave={() => handleExit('contact')}
      >
        <section className='flex items-center gap-4'>
          <CircleUser />
          Contact
        </section>
      </Link>
    </nav>
  );
};

export default Follow;
