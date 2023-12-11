import React from 'react';
import Conditional from './conditional';
import Link from 'next/link';
import ThemeSwitch from './themeswitch';

const NavBar = () => {
  return (
    <nav className='flex h-[60px] items-end justify-between border-b pb-2'>
      <section>
        <Conditional />
        <span className='flex gap-6'>
          <Link
            href='/'
            className='text-light-subtitle  hover:text-light-title dark:text-dark-subtitle dark:hover:text-dark-title'
          >
            Projects
          </Link>
          <Link
            href='/'
            className='text-light-subtitle  hover:text-light-title dark:text-dark-subtitle dark:hover:text-dark-title'
          >
            Explore
          </Link>
          <Link
            href='/'
            className='text-light-subtitle  hover:text-light-title dark:text-dark-subtitle dark:hover:text-dark-title'
          >
            Skills
          </Link>
          <Link
            href='/'
            className='text-light-subtitle  hover:text-light-title dark:text-dark-subtitle dark:hover:text-dark-title'
          >
            Contact
          </Link>
        </span>
      </section>
      <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
