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

const IconComponent = ({ name }: IconComponentProps) => {
  let Icon = iconTypes[name];
  useEffect(() => {
    handleSkillContainer();
  }, []);
  return (
    <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
      <div className='opacity-100 transition-opacity group-hover:opacity-0'>
        <Icon />
      </div>
      <p className='absolute bottom-1 right-1 text-light-title opacity-0 group-hover:opacity-0 dark:text-dark-title'>
        {name}
      </p>
    </div>
  );
};

export default IconComponent;
