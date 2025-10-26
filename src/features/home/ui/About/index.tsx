import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import type { FC } from 'react';

const About: FC = () => {
  useGSAP(() => {
    const leftTitleSplit = new SplitText('#left-title', { type: 'words' });

    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.inOut',
      },
      scrollTrigger: {
        trigger: '#about',
        start: 'top 60%',
      },
    });

    tl.from(leftTitleSplit.words, {
      opacity: 0,
      yPercent: '+=20',
      stagger: {
        amount: 0.3,
      },
    })
      .from('.grid-img', {
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: 'power1.inOut',
      })
      .from('#about-score', {
        scale: 0.7,
        opacity: 0,
        y: '+=10',
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      });
  });

  return (
    <div id='about'>
      <div className='mb-16 px-5 md:px-0'>
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Cocktails</p>
            <h2 id='left-title'>Where every detail matters from muddle to garnish</h2>
          </div>

          <div className='sub-content'>
            <p>
              Every cocktail we serve is a reflection of our obsession with detail — from the first
              muddle to the final garnish. That care is what turns a simple drink into something
              truly memorable.
            </p>

            <div>
              <p className='text-xl font-bold md:text-3xl'>
                <span id='about-score'>4.5</span>
                /5
              </p>
              <p className='text-white-100 text-sm'>More than +12000 customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className='top-grid'>
        <div id='grid-img-1' className='grid-img md:col-span-3'>
          <div className='noisy' />
          <img src='/images/abt1.png' alt='grid-img-1' />
        </div>

        <div id='grid-img-2' className='grid-img md:col-span-6'>
          <div className='noisy' />
          <img src='/images/abt2.png' alt='grid-img-2' />
        </div>

        <div id='grid-img-3' className='grid-img md:col-span-3'>
          <div className='noisy' />
          <img src='/images/abt5.png' alt='grid-img-5' />
        </div>
      </div>

      <div className='bottom-grid'>
        <div id='grid-img-4' className='grid-img md:col-span-8'>
          <div className='noisy' />
          <img src='/images/abt3.png' alt='grid-img-3' />
        </div>

        <div id='grid-img-5' className='grid-img md:col-span-4'>
          <div className='noisy' />
          <img src='/images/abt4.png' alt='grid-img-4' />
        </div>
      </div>
    </div>
  );
};

export default About;
