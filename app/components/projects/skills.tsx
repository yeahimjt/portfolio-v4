'use client';
import { useSplineState } from '@/app/states';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  title: string;
}

const Skills = ({ title }: Skill) => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  useEffect(() => {
    if (loaded) {
      handleSkillAnimation();
    }
  }, [loaded]);

  function handleSkillAnimation() {
    const element = document.querySelectorAll('span.project-skill');
    gsap.fromTo(
      element,
      {
        scale: 0,
        opacity: 0,
      },
      { scale: 1, opacity: 1, delay: 1.3, duration: 0.5, stagger: 0.1 }
    );
  }
  return (
    <span className='bg-light-container project-skill dark:bg-dark-container text-light-general dark:text-dark-general px-4 py-1 text-[12px]'>
      {title}
    </span>
  );
};

export default Skills;
