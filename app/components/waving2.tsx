'use client';

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '../states';
import { animateSplineIn } from '../animations';

gsap.registerPlugin(ScrollTrigger);

const Waving2 = () => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  useEffect(() => {
    if (loaded) {
      animateSplineIn();
    }
  }, [loaded]);

  return (
    <div className='load-container  h-[100px] w-[100px] rounded-full'>
      <Spline
        scene='https://prod.spline.design/MbgCUz609p2Ir5iK/scene.splinecode'
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Waving2;
