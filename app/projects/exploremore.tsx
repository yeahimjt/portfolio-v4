import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ExploreMoreProps {
  previous: string;
  next: string;
}

const ExploreMore = ({ previous, next }: ExploreMoreProps) => {
  return (
    <div className='col-span-6 mb-[30px] mt-[60px] lg:col-start-2 lg:col-end-6 '>
      <div className='flex justify-between'>
        <Link href={previous} className='group flex items-center gap-2'>
          <ArrowRight
            className='rotate-0 transition-all group-hover:rotate-180'
            size={20}
          />
          <h2 className='title'>Previous Project</h2>
        </Link>
        <Link href={next} className='group flex items-center gap-2'>
          <h2 className='title'>Next Project</h2>
          <ArrowLeft
            className='rotate-0 transition-all group-hover:rotate-180'
            size={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default ExploreMore;
