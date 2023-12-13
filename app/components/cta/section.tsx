'use client';
import { handleCtaContainer } from '@/app/animations';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';

const CtaSection = () => {
  useEffect(() => {
    handleCtaContainer();
  }, []);
  return (
    <section className='col-span-6 my-[160px] flex items-center justify-between lg:col-start-2 lg:col-end-6'>
      <span>
        <p className='cta-small'>Want to work together?</p>
        <h5 className='cta-big text-[32px] font-bold text-light-title dark:text-dark-title'>
          I&apos;m one click away
        </h5>
      </span>
      <Link
        href='/contact'
        className='cta-cta group flex h-[100px] w-[100px] items-center justify-center rounded-full bg-light-title dark:bg-dark-title'
      >
        <ArrowRight
          className='text-dark-title transition-all group-hover:-rotate-45 dark:text-light-title'
          size={42}
        />
      </Link>
    </section>
  );
};

export default CtaSection;
