'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '@/app/states';
import { handleTitleBelowAnimation } from '@/app/animations';
import ExperienceSample from './sample';
import { sampler_experience } from '@/app/constants';
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  useEffect(() => {
    handleTitleBelowAnimation();
  }, [loaded]);

  return (
    <section
      className='col-span-6 mt-[140px] space-y-[60px] lg:col-start-2 lg:col-end-6'
      id='experience'
    >
      <h1 className='title below-fold'>EXPERIENCE</h1>
      <div className='space-y-[44px]'>
        {sampler_experience.map((experience: Experience, index) => (
          <ExperienceSample key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
