'use client';
import React, { useEffect } from 'react';

import ReactIcon from './icons/react.svg';
import NextIcon from './icons/next.svg';
import TailwindIcon from './icons/tailwind.svg';
import JavaScriptIcon from './icons/javascript.svg';
import TypeScriptIcon from './icons/typescript.svg';
import FirebaseIcon from './icons/firebase.svg';
import ExpressIcon from './icons/express.svg';
import AwsIcon from './icons/aws.svg';
import AzureIcon from './icons/azure.svg';
import MySQLIcon from './icons/mysql.svg';
import MongoIcon from './icons/mongo.svg';
import JavaIcon from './icons/java.svg';
import CIcon from './icons/c.svg';
import CSharpIcon from './icons/c#.svg';
import PythonIcon from './icons/python.svg';
import { handleSkillContainer } from '@/app/animations';

interface IconTypes {
  [key: string]: string;
}

const iconTypes: IconTypes = {
  react: ReactIcon,
  next: NextIcon,
  tailwind: TailwindIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  firebase: FirebaseIcon,
  express: ExpressIcon,
  aws: AwsIcon,
  azure: AzureIcon,
  mysql: MySQLIcon,
  mongo: MongoIcon,
  java: JavaIcon,
  c: CIcon,
  csharp: CSharpIcon,
  python: PythonIcon,
};

interface IconComponentProps {
  name: string;
}

const IconComponent = ({ name, ...props }: IconComponentProps) => {
  let Icon = iconTypes[name];
  useEffect(() => {
    handleSkillContainer();
  }, []);
  return (
    <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
      <div className='opacity-100 transition-opacity group-hover:opacity-0'>
        <Icon />
      </div>
      <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
        {name}
      </p>
    </div>
  );
};

export default IconComponent;
