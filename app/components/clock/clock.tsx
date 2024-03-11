'use client';
import { Coffee, Fuel, Search, Utensils } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface ClockProps {}

interface ClockState {
  ctx: CanvasRenderingContext2D | null;
  cWidth: number;
  cHeight: number;
  hours: number[];
  r: number;
}

class ClockClass {
  ctx: CanvasRenderingContext2D;
  cWidth: number;
  cHeight: number;
  hours: number[];
  r: number;
  intervalId: NodeJS.Timeout | null;

  constructor(
    ctx: CanvasRenderingContext2D,
    cWidth: number,
    cHeight: number,
    hours: number[]
  ) {
    this.ctx = ctx;
    this.cWidth = cWidth;
    this.cHeight = cHeight;
    this.hours = hours;
    this.r = cWidth / 2 - 20;
    this.intervalId = null;
  }

  init() {
    this.draw();
    this.intervalId = setInterval(() => this.draw(), 1000);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    const { hours, minutes, seconds } = this.getTime();

    this.ctx.save();
    this.drawPanel();
    this.drawHourNums();

    this.drawSecondIndicator(seconds);
    this.drawMinuteIndicator(minutes);
    this.drawHourIndicator(hours, minutes);
    this.drawCentralPointer();
    this.ctx.restore();
  }

  drawPanel() {
    this.ctx.beginPath();
    this.ctx.translate(this.cWidth / 2, this.cWidth / 2);
    this.ctx.fillStyle = '#fff';
    this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawHourNums() {
    this.ctx.font = '40px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = '#000';

    this.hours.forEach((text, k) => {
      let rad = ((2 * Math.PI) / 12) * (k - 2);
      let x = Math.cos(rad) * (this.r - 40);
      let y = Math.sin(rad) * (this.r - 40);
      this.ctx.beginPath();
      this.ctx.fillText(text.toString(), x, y);
    });
  }

  drawCentralPointer() {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#333';
    this.ctx.arc(0, 0, 13, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#666';
    this.ctx.arc(0, 0, 6, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawHourIndicator(hours: number, minutes: number) {
    const rad = ((2 * Math.PI) / 12) * hours,
      mRad = ((2 * Math.PI) / 12 / 60) * minutes;
    this.ctx.save();

    this.ctx.rotate(rad + mRad);

    this.ctx.beginPath();
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -this.r / 2);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.lineWidth = 7;
    this.ctx.moveTo(0, -this.r / 5);
    this.ctx.lineTo(0, -this.r / 1.8);
    this.ctx.stroke();

    this.ctx.restore();
  }

  drawMinuteIndicator(minutes: number) {
    const rad = ((2 * Math.PI) / 60) * minutes;
    this.ctx.save();
    this.ctx.rotate(rad);

    this.ctx.beginPath();
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -this.r / 1.5);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.lineWidth = 7;

    this.ctx.moveTo(0, -this.r / 5);
    this.ctx.lineTo(0, -this.r / 1.2);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawSecondIndicator(seconds: number) {
    const rad = ((2 * Math.PI) / 60) * seconds;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'orange';
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';
    this.ctx.rotate(rad);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -this.r / 1.1);
    this.ctx.stroke();
    this.ctx.restore();
  }

  getTime() {
    let d = new Date();
    return {
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
    };
  }
}

const Clock: React.FC<ClockProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let clock: ClockClass | null = null;

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const cWidth = ctx?.canvas.width || 400;
    const cHeight = ctx?.canvas.height || 400;
    const hours = Array(12)
      .fill(undefined)
      .map((_, index) => index + 1);

    if (ctx) {
      clock = new ClockClass(ctx, cWidth, cHeight, hours);
      clock.init();
    }

    return () => {
      if (clock?.intervalId) {
        clearInterval(clock.intervalId);
        clock = null;
      }
    };
  }, []);

  return (
    <div className='flex flex-wrap justify-center  gap-[20px] lg:justify-between'>
      <canvas
        className='rounded-3xl bg-light-title'
        ref={canvasRef}
        width={400}
        height={400}
      ></canvas>
      <div className='relative'>
        <Image
          className='rounded-3xl'
          src={'/image/location.png'}
          width={400}
          height={400}
          alt=''
        />
        <section className='absolute bottom-4 mx-4 flex h-[70px] w-[calc(100%-30px)] items-center justify-around rounded-3xl bg-gray-500 p-4'>
          <Search
            className=' rounded-full bg-gray-400 p-3 text-white'
            size={45}
          />
          <Utensils
            className=' rounded-full bg-orange-400 p-3 text-white'
            size={45}
          />
          <Fuel
            className=' rounded-full bg-blue-400 p-3 text-white'
            size={45}
          />
          <Coffee
            className=' rounded-full bg-gray-400 p-3 text-white'
            size={45}
          />
        </section>
      </div>
    </div>
  );
};

export default Clock;
