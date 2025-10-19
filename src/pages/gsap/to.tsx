import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, type FC } from 'react';

const GsapToPage: FC = () => {
  const blueBoxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(blueBoxRef.current, {
      x: 250,
      repeat: -1, // 반복 횟수
      yoyo: true, // 연속적으로 반복,
      rotate: 360,
      duration: 6,
      ease: 'elastic',
    });
  });

  return (
    <main>
      <h1>GsapTo</h1>

      <p className='mt-5 text-gray-500'>
        The <code>gsap.to()</code> method is used to animate elements from their current state to a
        new state.
      </p>
      <p className='mt-5 text-gray-500'>
        The <code>gsap.to()</code> method is similar to the <code>gsap.from()</code> method, but the
        difference is that the <code>gsap.to()</code> method animates elements from their current
        state to a new state, while the <code>gsap.from()</code> method animates elements from a new
        state to their current state.
      </p>

      <p className='mt-5 text-gray-500'>
        Read more about the{' '}
        <a
          href='https://greensock.com/docs/v3/GSAP/gsap.to()'
          target='_blank'
          rel='noreferrer noopener nofollow'
        >
          gsap.to()
        </a>{' '}
        method.
      </p>

      <div className='mt-20'>
        <div ref={blueBoxRef} className='h-20 w-20 rounded-lg bg-blue-500' />
      </div>
    </main>
  );
};

export default GsapToPage;
