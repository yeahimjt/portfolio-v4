import React from 'react';
import IconComponent from './icon';
import { skills } from '@/app/constants';

const SkillsSection = () => {
  return (
    <section
      className='col-span-6 space-y-[40px]  pt-[80px] lg:col-start-2 lg:col-end-6'
      id='skill'
    >
      <h1 className='title below-fold'>SKILLS</h1>
      <section className='flex flex-wrap gap-[20px]'>
        {skills.map((skill: string, index) => (
          <IconComponent key={index} name={skill} />
        ))}
      </section>
    </section>
  );
};

export default SkillsSection;
