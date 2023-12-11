'use client';
import Image from 'next/image';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import Skills from './skills';
import { ArrowRight, Github, Link, Link2, LinkIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '@/app/states';

gsap.registerPlugin(ScrollTrigger);

interface ProjectSample {
  project: Project;
}
const ProjectSample = ({ project }: ProjectSample) => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  useEffect(() => {
    if (loaded) {
      handleImageAnimation();
      handleProjectDetailsAnimation();
    }
  }, [loaded]);

  function handleImageAnimation() {
    let element = document.querySelectorAll('img.initial-clip-path-image');
    gsap.to(element, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      delay: 1,
      duration: 1,
      stagger: 0.5,
    });
  }
  function handleProjectDetailsAnimation() {
    let projectTitle = document.querySelectorAll('h2.project-title');
    let projectCategory = document.querySelectorAll('p.project-category');

    gsap.fromTo(
      projectTitle,
      {
        translateY: 40,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        stagger: 0.5,
      }
    );

    gsap.fromTo(
      projectCategory,
      {
        translateY: 40,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        delay: 1.3,
        duration: 1,
        stagger: 0.5,
      }
    );
  }
  return (
    <section className='col-span-1 space-y-2'>
      <Image
        className='initial-clip-path-image w-full'
        src={project.image_url}
        width={437}
        height={366}
        alt={project.title}
      />
      <div className='space-y-1'>
        <h2 className='project-title'>{project.title}</h2>
        <p className='project-category'>{project.category}</p>
      </div>
      <section className='flex flex-wrap gap-[6px]'>
        {project.skills.map((skill, index) => (
          <Skills title={skill} key={index} />
        ))}
      </section>
      <section className='text-light-title dark:text-dark-title flex items-center justify-end gap-[10px] pt-[20px]'>
        {project.live_link && (
          <a href={project.live_link} className='p-[7px]'>
            <Link />
          </a>
        )}
        <a href={project.github_link} className='p-[7px]'>
          <Github />
        </a>
        <button
          className='text-light-title group flex items-center gap-[10px] rounded-[5px] px-4 py-2'
          style={{ backgroundColor: project.color }}
        >
          read more{' '}
          <ArrowRight
            className='-rotate-180 transition-all group-hover:rotate-0'
            size={18}
          />
        </button>
      </section>
    </section>
  );
};

export default ProjectSample;
