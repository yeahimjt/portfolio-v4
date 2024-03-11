import { FileText, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import ProjectSection from './components/projects/section';
import Waving from './components/waving';
import ExperienceSection from './components/experience/section';
import SkillsSection from './components/skills/section';
import CtaSection from './components/cta/section';
import FooterSection from './components/footer/section';
import Follow from './components/navbar/follow';
import NavBar from './components/navbar/navbar';

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <main className='grid-[20px] mt-[80px] grid  grid-cols-4 lg:grid-cols-6'>
        <Follow />
        <header className='col-span-4 grid w-full grid-cols-4 gap-[20px] lg:col-start-2'>
          <span className='col-span-4 space-y-4 lg:col-span-2'>
            <div className='relative h-[150px] w-[150px] overflow-hidden rounded-full'>
              <Waving />
              <Image
                className='spline-backdrop absolute top-0 -z-10'
                src={'/image/image-background.png'}
                width={200}
                height={200}
                alt='image colors'
              />
            </div>
            <section className='space-y-1'>
              <h1 className='test-gradient'>Hi, I&apos;m Jonathan Trevino</h1>
              <p>
                A <span className='bold'>software engineer</span> with a passion
                in <span className='bold'>ui</span> and{' '}
                <span className='bold'>front end development</span>
              </p>
            </section>
            <section className='flex justify-end gap-[10px] pt-8'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://docs.google.com/document/d/12HWsc0QCJh_Z6-YBHAPzM31UkaKWzOh6pYE7yaFGJ-c/edit?usp=sharing'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <FileText />
              </a>
              <a
                href='https://github.com/yeahimjt?tab=repositories'
                target='_blank'
                rel='noreferrer'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <Github />
              </a>
              <a
                href='https://www.linkedin.com/in/jonathan-trevino/'
                rel='noreferrer'
                target='_blank'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <Linkedin />
              </a>
            </section>
          </span>
          <span className='col-span-4 space-y-4 lg:col-span-2'>
            <p>
              Computer science graduate with a minor in cybersecurity. My
              interest in web development sparked during college, where I
              discovered a passion for building functional web applications.
            </p>
            <p>
              Since college, I&apos;ve gained valuable experience through
              freelance work, focusing on building web applications that
              prioritize functionality. This hands-on experience has allowed me
              to refine my skills and deepen my understanding of various
              technologies.
            </p>
            <p>
              Continuously seeking to enhance my skills, I work on personal
              projects using a range of technologies. These projects not only
              serve as a creative outlet but also as a means to stay up-to-date
              with the latest trends and tools in web development.
            </p>
          </span>
        </header>
        <ProjectSection />
        <ExperienceSection />
        <SkillsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
