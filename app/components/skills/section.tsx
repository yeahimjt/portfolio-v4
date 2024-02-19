'use client';
import React, { useEffect } from 'react';
import ReactIcon from '@/public/icons/react.svg';
import NextIcon from '@/public/icons/next.svg';
import TailwindIcon from '@/public/icons/tailwind.svg';
import JavaScriptIcon from '@/public/icons/javascript.svg';
import TypeScriptIcon from '@/public/icons/typescript.svg';
import FirebaseIcon from '@/public/icons/firebase.svg';
import ExpressIcon from '@/public/icons/express.svg';
import AwsIcon from '@/public/icons/aws.svg';
import AzureIcon from '@/public/icons/azure.svg';
import MySQLIcon from '@/public/icons/mysql.svg';
import MongoIcon from '@/public/icons/mongo.svg';
import JavaIcon from '@/public/icons/java.svg';
import CIcon from '@/public/icons/c.svg';
import CSharpIcon from '@/public/icons/csharp.svg';
import PythonIcon from '@/public/icons/python.svg';
import { handleSkillContainer } from '@/app/animations';

const SkillsSection = () => {
  useEffect(() => {
    handleSkillContainer();
  }, []);
  return (
    <section
      className='col-span-6 space-y-[40px]  pt-[140px] lg:col-start-2 lg:col-end-6'
      id='skill'
    >
      <h1 className='title below-fold'>SKILLS</h1>
      <section className='flex flex-wrap gap-[20px]'>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <ReactIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            react
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <TailwindIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            tailwind
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <NextIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            next
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <JavaScriptIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            javascript
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <TypeScriptIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            typescript
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <FirebaseIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            firebase
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <ExpressIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            express
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <AwsIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            aws
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <AzureIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            azure
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <MySQLIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            mysql
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <MongoIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            mongo
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <JavaIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            java
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <CIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            c
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <CSharpIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            c#
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <PythonIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            python
          </p>
        </div>
      </section>
    </section>
  );
};

export default SkillsSection;
