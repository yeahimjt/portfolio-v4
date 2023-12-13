'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Conditional = () => {
  const pathName = usePathname();

  // Path name returns the path, home is only '/' therefor equal to 1, any other path will be greater
  let home = pathName.length > 1 ? true : false;

  return (
    <div>
      {home ? (
        <Link className='group flex items-center gap-2' href='/'>
          <ArrowRight
            className='transition-all group-hover:rotate-180'
            size={18}
          />
          <h1>Home</h1>
        </Link>
      ) : (
        <span className='hidden gap-6 md:flex'>
          <ScrollLink
            className='cursor-pointer text-light-general  hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
            to='projects'
            spy
            smooth
            offset={-90}
            duration={500}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className='cursor-pointer text-light-general  hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
            to='experience'
            spy
            smooth
            offset={-90}
            duration={500}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            className='cursor-pointer text-light-general  hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
            to='skill'
            spy
            smooth
            duration={500}
          >
            Skills
          </ScrollLink>
          <Link
            href='/contact'
            className='cursor-pointer text-light-general  hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
          >
            Contact
          </Link>
        </span>
      )}
    </div>
  );
};

export default Conditional;
