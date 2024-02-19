'use client';
import {
  ArrowLeft,
  CircleUser,
  FolderOpenDot,
  Layers3,
  MenuIcon,
  Trophy,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const sections = ['projects', 'experience', 'skills', 'contact'];
gsap.registerPlugin(ScrollTrigger);
const Follow = () => {
  const [active, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);
  const { theme } = useTheme();
  const [path, setPath] = useState<string>('');

  console.log(path);

  const [width, setWidth] = useState<null | number>(null);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
      if (window.innerWidth >= 1540) {
        setOpen(true);
      } else {
        console.log('in side here');
        setOpen(false);
      }
    };
    // mounted, check if screen size is appropriate
    handleResize();
    window.addEventListener('resize', handleResize);
    setPath(window.location.pathname);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (open) {
      if (width && width > 1540) {
        console.log('inside ');
        gsap.to('.nav-content', {
          visibility: 'visible',
          delay: 0.5,
          height: 'fit',
        });
      }
      openAnimation();
    } else {
      closeAnimation();
    }
  }, [open]);

  const openAnimation = () => {
    const navBack = document.querySelector('.nav-back');
    const navContent = document.querySelector('.nav-content');
    const navButton = document.querySelector('.nav-button');
    setAnimating(true);
    gsap.fromTo(
      '.nav-content',
      {
        visibility: 'hidden',
        height: '0px',
      },
      {
        visibility: 'visible',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        border: 1,
        delay: 0.2,
      }
    );
    gsap.fromTo(
      ['.homes', '.projects', '.experience', '.skills', '.contact'],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.1,
        stagger: 0.05,
      }
    );

    setTimeout(() => {
      setAnimating(false);
    }, 500);
    console.log('running');
  };

  const closeAnimation = () => {
    const navBack = document.querySelector('.nav-back');
    const navContent = document.querySelector('.nav-content');
    const navButton = document.querySelector('.nav-button');
    setAnimating(true);
    if (width && width > 1540) {
      gsap.to('.nav-content', {
        visibility: 'visible',
        delay: 0.5,
        height: 'fit',
        backgroundColor: 'transparent',
      });
    } else {
      gsap.fromTo(
        ['.homes', '.projects', '.experience', '.skills', '.contact'],
        {
          opacity: 1,
        },
        {
          opacity: 0,
          delay: 0.05,
          duration: 0,
          stagger: 0.05,
        }
      );
      gsap.fromTo(
        '.nav-content',
        {
          visibility: 'visible',
          backgroundColor: '#FFFFFF',
        },
        {
          height: '0px',
          backgroundColor: 'transparent',
          delay: 0.2,
          duration: 0.3,
        }
      );
      gsap.to('.nav-content', {
        visibility: 'hidden',
        delay: 0.4,
      });
    }
    setTimeout(() => {
      setAnimating(false);
    }, 500);
    console.log('running the close');
  };

  const handleActive = (to: any) => {
    console.log(to);
    setActive(to);
    sections.forEach((section) => {
      if (section !== to) {
        gsap.to(`.${section}`, {
          color: theme === 'light' ? '#999999' : '#AAAAAA',
          duration: 0.1,
          scale: '1.00',
          ease: 'power2.out',
        });
      } else {
        gsap.to(`.${section}`, {
          color: theme === 'light' ? '#666666' : '#DDDDDD',
          scale: '1.10',
          duration: 0.1,
          ease: 'power2.out',
        });
      }
    });
  };
  const handleHover = (to: any) => {
    if (to === active) return;
    gsap.to(`.${to}`, {
      color: theme === 'light' ? '#666666' : '#DDDDDD',
      scale: '1.10',
      duration: 0.1,
      ease: 'power2.out',
    });
  };
  const handleExit = (to: any) => {
    if (to === active) return;
    gsap.to(`.${to}`, {
      color: theme === 'light' ? '#999999' : '#AAAAAA',
      duration: 0.1,
      scale: '1.00',
      ease: 'power2.out',
    });
  };

  // const handleOpen = () => {
  //   if (open) {
  //     setOpen(!open);
  //     openAnimation();
  //   } else {
  //     setOpen(!open);
  //     closeAnimation();
  //   }
  // };

  return (
    <nav
      className={`nav-back fixed bottom-24  z-20 m-0 mr-12 flex h-fit flex-col gap-0  transition-all follow:bottom-auto`}
    >
      <section className={`nav-content z-20 flex h-auto flex-col gap-4 p-6`}>
        {path !== '/' ? (
          <Link
            className='homes cursor-pointer text-light-general opacity-0  transition-all hover:scale-105 hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
            href='/'
            onMouseEnter={() => handleHover('contact')}
            onMouseLeave={() => handleExit('contact')}
          >
            <section className='flex items-center gap-4'>
              <ArrowLeft />
              Home
            </section>
          </Link>
        ) : (
          <>
            <ScrollLink
              className='projects cursor-pointer text-light-general opacity-0  hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              to='projects'
              spy
              smooth
              offset={-90}
              duration={500}
              onSetActive={handleActive}
              onClickCapture={() => handleActive('projects')}
              onMouseEnter={() => handleHover('projects')}
              onMouseLeave={() => handleExit('projects')}
            >
              <section className='flex items-center gap-4'>
                <FolderOpenDot />
                Projects
              </section>
            </ScrollLink>
            <ScrollLink
              className='experience cursor-pointer text-light-general opacity-0  transition-all hover:scale-105 hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              to='experience'
              spy
              smooth
              offset={-90}
              duration={500}
              onSetActive={handleActive}
              onClickCapture={() => handleActive('experience')}
              onMouseEnter={() => handleHover('experience')}
              onMouseLeave={() => handleExit('experience')}
            >
              <section className='flex items-center gap-4'>
                <Trophy />
                Experience
              </section>
            </ScrollLink>
            <ScrollLink
              className='skills cursor-pointer text-light-general opacity-0  transition-all hover:scale-105 hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              to='skill'
              spy
              smooth
              offset={-90}
              duration={500}
              onSetActive={handleActive}
              onClickCapture={() => handleActive('skills')}
              onMouseEnter={() => handleHover('skills')}
              onMouseLeave={() => handleExit('skills')}
            >
              <section className='flex items-center gap-4'>
                <Layers3 />
                Skills
              </section>
            </ScrollLink>
          </>
        )}

        <Link
          className='contact cursor-pointer text-light-general opacity-0  transition-all hover:scale-105 hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
          href='/contact'
          onMouseEnter={() => handleHover('contact')}
          onMouseLeave={() => handleExit('contact')}
        >
          <section className='flex items-center gap-4'>
            <CircleUser />
            Contact
          </section>
        </Link>
      </section>
      <div className={`nav-button z-20 mt-4 flex w-full justify-start`}>
        <button
          className={`nav-button-content visible  flex  w-fit justify-center rounded-full  p-4 text-dark-container hover:scale-105 active:bg-[color:#606970] follow:invisible ${
            animating ? 'bg-[color:#606970]' : 'bg-[color:#C2D7E9]'
          }`}
          onClick={() => (animating ? '' : setOpen(!open))}
        >
          <MenuIcon size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Follow;
