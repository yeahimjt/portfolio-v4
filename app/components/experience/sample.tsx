'use client';
import { handleExperienceAnimation } from '@/app/animations';
import React, { useEffect } from 'react';
interface ExperienceSampleProps {
  experience: Experience;
}
const ExperienceSample = ({ experience }: ExperienceSampleProps) => {
  useEffect(() => {
    handleExperienceAnimation();
  }, []);
  return (
    <section className='pb-[37px] pt-[19px]'>
      <span className='flex justify-between'>
        <h2 className='experience-title'>{experience.title}</h2>
        <p className='experience-timeframe'>{experience.timeframe}</p>
      </span>
      <h3 className='experience-company'>{experience.company}</h3>
      <p className='experience-description pt-1'>{experience.description}</p>
    </section>
  );
};

export default ExperienceSample;
