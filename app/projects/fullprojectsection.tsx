import { Github, Link } from 'lucide-react';
import React from 'react';
import { skills } from '../constants';
import Skills from '../components/projects/skills';
import Image from 'next/image';
import Warning from '../components/warning';
import Follow from '../components/navbar/follow';
import NavBar from '../components/navbar/navbar';

interface FullProjectSectionProps {
  data: ProjectFull;
}

const FullProjectSection = ({ data }: FullProjectSectionProps) => {
  return (
    <div className='col-span-6 grid grid-cols-6 gap-[20px]'>
      <section className='col-span-6 lg:col-start-2 lg:col-end-6'>
        <Image src={data.image_url} width={800} height={800} alt='' />
      </section>
      <section className='col-span-6 space-y-2 lg:col-start-2  lg:col-end-6'>
        <span className='flex items-start justify-between'>
          <section>
            <h2 className='title'>{data.title}</h2>
            <span className='bold'>{data.category}</span>
          </section>
          <section className='flex items-center gap-[10px]  text-light-title dark:text-dark-title'>
            {data.warning && <Warning text={data.warning} animate={false} />}
            {data.live_link && (
              <a
                target='_blank'
                rel='noreferrer'
                href={data.live_link}
                className='p-[7px]'
              >
                <Link />
              </a>
            )}
            <a
              target='_blank'
              rel='noreferrer'
              href={data.github_link}
              className='p-[7px]'
            >
              <Github />
            </a>
          </section>
        </span>
        <span className='flex flex-wrap gap-[6px]'>
          {data.skills.map((skill, index) => (
            <Skills key={index} title={skill} animate={false} />
          ))}
        </span>
        <section className='mt-[60px] space-y-[45px]'>
          <div className='space-y-4 pt-[60px]'>
            <h2>Overview</h2>
            {data.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className='space-y-4'>
            <h2>Features</h2>
            {data.features.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className='space-y-4'>
            <h2>Challenges</h2>
            <p>{data.challenges}</p>
          </div>
          <div className='space-y-4'>
            <h2>Results</h2>
            <p>{data.results}</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default FullProjectSection;
