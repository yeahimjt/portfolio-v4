'use client';
import React, { useEffect, useState } from 'react';
import Conditional from './conditional';
import Link from 'next/link';
import ThemeSwitch from './themeswitch';
import MobileNav from './mobile';

const NavBar = () => {
  return (
    <nav className='grid h-[60px] grid-cols-6 items-end justify-between  pt-12 dark:border-dark-container'>
      <section className='col-span-6 flex items-center gap-6 lg:col-start-2 lg:col-end-6'>
        <Conditional />
      </section>
    </nav>
  );
};

export default NavBar;
