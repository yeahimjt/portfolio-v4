'use client';
import { FileText, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import ProjectSection from './components/projects/section';
import Waving from './components/waving';
import { useEffect } from 'react';

export default function Home() {
  return (
    <main className='grid-[20px] mt-[80px] grid  grid-cols-6'>
      <header className='col-span-4 col-start-2 grid w-full grid-cols-4 gap-[20px]'>
        <span className='col-span-2 space-y-4'>
          <div className=' relative h-[150px] w-[150px] overflow-hidden rounded-full'>
            <Waving />
            <Image
              className='absolute top-0 -z-10'
              src={'/image/image-background.png'}
              width={200}
              height={200}
              alt='image colors'
            />
          </div>
          <section className='space-y-1'>
            <h1>Jonathan Trevino</h1>
            <p>
              A <span className='bold'>software engineer</span> with a passion
              in <span className='bold'>ui</span> and{' '}
              <span className='bold'>front end development</span>
            </p>
          </section>
          <section className='flex justify-end gap-[10px] pt-8'>
            <a
              href='/'
              className='text-light-general dark:text-dark-general hover:text-light-subtitle dark:hover:text-dark-subtitle'
            >
              <FileText />
            </a>
            <a
              href='/'
              className='text-light-general dark:text-dark-general hover:text-light-subtitle dark:hover:text-dark-subtitle'
            >
              <Github />
            </a>
            <a
              href='/'
              className='text-light-general dark:text-dark-general hover:text-light-subtitle dark:hover:text-dark-subtitle'
            >
              <Linkedin />
            </a>
          </section>
        </span>
        <span className='col-span-2 space-y-4'>
          <p>
            While pursuing my bachelors of computer science, with a minor in
            cyber security, web development became a rabbit hole I delved into
            head first.
          </p>
          <p>
            Since then I have had freelance experience developing a web
            application, and created full stack projects that serve a functional
            purpose.{' '}
          </p>
          <p>
            I frequently dedicate time to enhance my current skills in Next.js,
            React.js, Tailwind, and TypeScript, aiming to write clean and
            efficient code.
          </p>
        </span>
      </header>
      <ProjectSection />
    </main>
  );
}
