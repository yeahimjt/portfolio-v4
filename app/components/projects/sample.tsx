'use client';
import Image from 'next/image';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import Skills from './skills';
import { ArrowRight, Github, Link, Link2, LinkIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '@/app/states';
import {
  handleImageAnimation,
  handleProjectDetailsAnimation,
} from '@/app/animations';
import { useRouter } from 'next/navigation';
import Warning from '../warning';

gsap.registerPlugin(ScrollTrigger);

interface ProjectSample {
  project: Project;
}
const ProjectSample = ({ project }: ProjectSample) => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  const router = useRouter();
  useEffect(() => {
    if (loaded) {
      handleImageAnimation();
      handleProjectDetailsAnimation();
    }
  }, [loaded]);

  return (
    <section className='col-span-1 space-y-2 flex gap-[20px] flex-col md:flex-row'>
      <Image
        className='initial-clip-path-image w-full'
        src={project.image_url}
        width={237}
        height={166}
        alt={project.title}
      />
      <section className='w-full'>


      <div className='space-y-1 pb-4'>
        <h2 className='project-title'>{project.title}</h2>
        <p className='project-category'>{project.category}</p>
      </div>
      <section className='flex flex-wrap gap-[6px]'>
        {project.skills.map((skill, index) => (
          <Skills title={skill} key={index} animate={true} />
        ))}
      </section>
      <section className='flex items-center justify-end gap-[10px] pt-[20px] text-light-title dark:text-dark-title w-full'>
        {project.warning && <Warning text={project.warning} animate={true} />}
        {project.live_link && (
          <a
            target='_blank'
            rel='noreferrer'
            href={project.live_link}
            className='project-live p-[7px]'
          >
            <Link />
          </a>
        )}
        <a
          target='_blank'
          rel='noreferrer'
          href={project.github_link}
          className='project-github p-[7px]'
        >
          <Github />
        </a>
        <button
          onClick={() => router.push(project.redirect_link)}
          className='project-redirect group flex items-center gap-[10px] rounded-[5px] px-4 py-2 text-light-title'
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
    </section>
  );
};

export default ProjectSample;
