'use client';
import React, { useEffect, useRef } from 'react';
import ProjectSample from './sample';
import { sampler_projects } from '@/app/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '@/app/states';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const { loaded, setLoaded } = useSplineState((state) => state);

  useEffect(() => {
    if (loaded) {
      handleTitleAnimation();
    }
  }, [loaded]);
  function handleTitleAnimation() {
    let element = document.querySelector('h1.title');
    gsap.fromTo(
      element,
      {
        translateX: -100,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1,
      }
    );
  }
  return (
    <section className='col-span-6 mt-[40px]  space-y-2'>
      <h1 className='title col-span-6'>SELECTED PROJECTS</h1>
      <section className='max:grid-cols-3   col-span-6 grid grid-cols-1 gap-[20px] lg:grid-cols-2'>
        {sampler_projects.map((project, index) => (
          <ProjectSample project={project} key={index} />
        ))}
      </section>
    </section>
  );
};

export default ProjectSection;
