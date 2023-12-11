'use client';

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSplineState } from '../states';

gsap.registerPlugin(ScrollTrigger);

const Waving = () => {
  const { loaded, setLoaded } = useSplineState((state) => state);
  useEffect(() => {
    if (loaded) {
      animateSplineIn();
    }
  }, [loaded]);
  console.log(loaded);
  function animateSplineIn() {
    let element = document.querySelector('.load-container');
    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.7,
        translateX: '200px',
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        translateX: '0px',
      }
    );
  }

  return (
    <div className='load-container  h-[100px] w-[100px] rounded-full'>
      <Spline
        scene='https://prod.spline.design/BKzFEZKjUMhOPsQA/scene.splinecode'
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Waving;
