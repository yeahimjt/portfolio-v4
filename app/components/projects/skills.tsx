'use client';
import { useSplineState } from '@/app/states';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  title: string;
  animate: boolean;
}

const Skills = ({ title, animate }: Skill) => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  useEffect(() => {
    if (loaded && animate) {
      handleSkillAnimation();
    }
  }, [loaded]);

  function handleSkillAnimation() {
    const element = document.querySelectorAll('span.project-skill');
    gsap.fromTo(
      element,
      {
        rotate: 15,
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        delay: 1.3,
        duration: 0.5,
        stagger: 0.1,
      }
    );
  }
  return (
    <span
      className={`${
        animate ? 'project-skill' : ''
      } bg-light-container px-4 py-1 text-[12px] text-light-general dark:bg-dark-container dark:text-dark-general`}
      id='skills'
    >
      {title}
    </span>
  );
};

export default Skills;
