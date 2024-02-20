'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import {
  AlertTriangle,
  Check,
  Clock,
  Globe,
  Linkedin,
  Mail,
  Send,
  X,
} from 'lucide-react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import { EmailTemplate } from '../emailtemplate';
import emailjs from '@emailjs/browser';
import { updateClock } from '../../helper';

const CtaSection = () => {
  const [fullName, setFullName] = useState<string | null>();
  const [contact, setContact] = useState<string | null>();
  const [description, setDescription] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    updateClock();
    setInterval(updateClock, 1000);
  }, []);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!fullName || !contact || !description) return;
    var templateParams = {
      name: fullName,
      email_address: contact,
      message: description,
    };
    setLoading(true);
    try {
      await emailjs.send(
        String(process.env.NEXT_PUBLIC_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
        templateParams,
        String(process.env.NEXT_PUBLIC_PUBLIC_API)
      );
      setFullName(null);
      setContact(null);
      setDescription(null);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
    setLoading(false);
  }
  return (
    <section
      className='col-span-6 space-y-[40px]  pb-[80px] pt-[140px] lg:col-start-2 lg:col-end-6'
      id='contact'
    >
      <h1 className='title below-fold'>CONTACT</h1>
      <form
        className='col-span-6 mt-[40px] space-y-[40px] '
        onSubmit={handleSubmit}
      >
        <span className='space-y-[20px]'>
          <p className='unimportant'>
            I&apos;m{' '}
            <span className='animate-pulse text-green-500'>actively</span>{' '}
            looking for new opportunities! Send me a message and I will get back
            with you.
          </p>
        </span>
        <section className='space-y-[20px]'>
          {success !== null ? (
            success ? (
              <div className='flex  justify-between bg-light-container p-4 transition-all dark:bg-dark-container'>
                <section className='flex gap-2'>
                  <Check className='text-green-700 dark:text-green-400' />
                  <h5 className='text-light-subtitle dark:text-dark-subtitle'>
                    Your email was successfully sent.
                  </h5>
                </section>
                <button type='button' onClick={() => setSuccess(null)}>
                  <X />
                </button>
              </div>
            ) : (
              <div className='flex justify-between bg-light-container p-4 transition-all dark:bg-dark-container'>
                <section className='flex gap-2'>
                  <AlertTriangle className='text-orange-700 dark:text-orange-400' />
                  <h5 className='text-light-subtitle dark:text-dark-subtitle'>
                    Your email was not sent.
                  </h5>
                </section>
                <button type='button' onClick={() => setSuccess(null)}>
                  <X />
                </button>
              </div>
            )
          ) : (
            <div className='transition-all'></div>
          )}
          <div className='transition-all'></div>
          <div className='flex gap-[20px]'>
            <span className='flex-[0.5] space-y-2'>
              <p>What&apos;s your name?</p>
              <input
                required
                value={fullName || ''}
                className='w-full border border-[color:#C1D7E9] p-[10px] text-[12px]'
                placeholder='First and last name please'
                onChange={(e) => setFullName(e.currentTarget.value)}
              />
            </span>
            <span className='flex-[0.5] space-y-2'>
              <p>How can I reach you?</p>
              <input
                value={contact || ''}
                className='w-full border border-[color:#CCE3D5] p-[10px] text-[12px]'
                placeholder='Email address will do'
                onChange={(e) => setContact(e.currentTarget.value)}
              />
            </span>
          </div>
          <div className='space-y-2'>
            <p>What would you like to say to me?</p>
            <textarea
              required
              value={description || ''}
              className='min-h-[150px] w-full resize-y border border-[color:#D4D0E1] p-[10px] text-[12px]'
              placeholder='Anything and everything!'
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
        </section>
        <div className='flex justify-end'>
          <button
            type='submit'
            disabled={loading}
            className='flex items-center gap-2 rounded-[5px] bg-dark-container px-4 py-1 text-dark-title disabled:bg-dark-general dark:bg-light-container dark:text-light-title  dark:disabled:bg-light-general'
          >
            {loading ? (
              <>
                <>Sending...</> <Send size={18} />
              </>
            ) : (
              <>
                <>Submit</> <Send size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CtaSection;
