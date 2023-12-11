'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Conditional = () => {
  const pathName = usePathname();
  let home = pathName.split('/') ? true : false;
  return (
    <div>
      {home ? (
        ''
      ) : (
        <Link href='/'>
          <ArrowRight />
          <h1>Home</h1>
        </Link>
      )}
    </div>
  );
};

export default Conditional;
