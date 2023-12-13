import Link from 'next/link';
import React from 'react';

const FooterSection = () => {
  return (
    <footer className='col-span-6 flex h-[60px] flex-col justify-between border-t border-light-container pt-2 dark:border-dark-container md:flex-row'>
      <h5 className='text-[10px] text-light-general dark:text-dark-general md:text-[14px]'>
        2023 &copy; Jonathan Trevino
      </h5>
      <h5 className='text-[10px] text-light-general dark:text-dark-general md:text-[14px]'>
        Designed and developed by Jonathan Trevino
      </h5>
      <Link className='flex justify-end pb-4 md:justify-normal' href='/'>
        <h5 className='text-[10px] text-light-general underline underline-offset-2 dark:text-dark-general md:text-[14px]'>
          To Top
        </h5>
      </Link>
    </footer>
  );
};

export default FooterSection;
