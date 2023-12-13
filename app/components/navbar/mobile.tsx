'use client';
import { Menu } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className='relative'>
      <button
        className='block cursor-pointer md:hidden'
        onClick={() => setMenu(!menu)}
      >
        <Menu className='' size={30} />
      </button>
      {menu && (
        <div className='absolute right-0 top-8 flex flex-col gap-2 border border-light-container bg-light-bg px-3 py-4 pl-4 text-right shadow-md dark:border-dark-container dark:bg-dark-bg'>
          <ScrollLink
            className='cursor-pointer'
            to='projects'
            spy
            smooth
            offset={-90}
            duration={500}
            onClick={() => setMenu(false)}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className='cursor-pointer'
            to='experience'
            spy
            smooth
            offset={-90}
            duration={500}
            onClick={() => setMenu(false)}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            className='cursor-pointer'
            to='skills'
            spy
            smooth
            offset={-90}
            duration={500}
            onClick={() => setMenu(false)}
          >
            Skills
          </ScrollLink>
          <Link
            href='/contact'
            className='cursor-pointer'
            onClick={() => setMenu(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </section>
  );
};

export default MobileNav;
