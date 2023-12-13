'use client';
import React, { useEffect } from 'react';

import Image from 'next/image';
import { handleSkillContainer } from '@/app/animations';

interface IconComponentProps {
  name: string;
}

const IconComponent = ({ name }: IconComponentProps) => {
  useEffect(() => {
    handleSkillContainer();
  }, []);
  return (
    <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
      <div className='opacity-100 transition-opacity group-hover:opacity-0'>
        <Image
          src={require(`./icons/${name}.svg`)}
          width={95}
          height={95}
          alt=''
        />
      </div>
      <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
        {name}
      </p>
    </div>
  );
};

export default IconComponent;
