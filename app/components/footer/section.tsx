import Link from 'next/link';
import React from 'react';
import Clock from '../clock/clock';

const FooterSection = () => {
  return (
    <footer className='pb-8 text-center'>
      <h5 className=' text-[10px] text-light-general dark:text-dark-general md:text-[14px]'>
        Courtesy of Jonathan Trevino
      </h5>
    </footer>
  );
};

export default FooterSection;
