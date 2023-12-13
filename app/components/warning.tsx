'use client';
import { AlertTriangle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSplineState } from '../states';
import { handleWarningAnimation } from '../animations';

interface WarningProps {
  text: string;
  animate: boolean;
}
const Warning = ({ text, animate }: WarningProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  useEffect(() => {
    if (!animate) {
      handleWarningAnimation();
    }
  }, [animate]);
  return (
    <div className='project-warning relative z-10'>
      <button
        className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-light-container'
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(true)}
      >
        <AlertTriangle size={24} className=' text-orange-500' />
      </button>
      <p
        className={`pointer-events-none absolute right-4 top-5 w-[260px] bg-light-container p-4 text-right shadow-sm transition-all delay-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Warning;
