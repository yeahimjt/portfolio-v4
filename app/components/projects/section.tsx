'use client';
import React, { useEffect, useRef } from 'react';
import ProjectSample from './sample';
import { sampler_projects } from '@/app/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '@/app/states';
import { handleTitleAnimation } from '@/app/animations';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const { loaded, setLoaded } = useSplineState((state) => state);

  useEffect(() => {
    if (loaded) {
      handleTitleAnimation();
    }
  }, [loaded]);

  return (
    <section
      className='col-span-6 mt-[140px] space-y-[60px] lg:col-start-2 lg:col-end-6'
      id='projects'
    >
      <h1 className='title above-fold col-span-6'>SELECTED PROJECTS</h1>
      <section className='col-span-1 grid grid-cols-1 gap-[20px]'>
        {sampler_projects.map((project, index) => (
          <ProjectSample project={project} key={index} />
        ))}
      </section>
    </section>
  );
};

export default ProjectSection;
