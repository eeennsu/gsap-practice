import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, type FC } from 'react';

const GsapFromPage: FC = () => {
  const greenBoxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(greenBoxRef.current, {
      x: 250,
      repeat: -1, // 반복 횟수 (-1은 무한 반복)
      yoyo: true, // 연속적으로 반복,
      rotate: 360,
      duration: 2,
      ease: 'power1.inOut',
    });
  });

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className='mt-5 text-gray-500'>
        The <code>gsap.from()</code> method is used to animate elements from a new state to their
        current state.
      </p>

      <p className='mt-5 text-gray-500'>
        The <code>gsap.from()</code> method is similar to the <code>gsap.to()</code> method, but the
        difference is that the <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates elements from their
        current state to a new state.
      </p>

      <p className='mt-5 text-gray-500'>
        Read more about the{' '}
        <a
          href='https://greensock.com/docs/v3/GSAP/gsap.from()'
          target='_blank'
          rel='noreferrer noopener nofollow'
        >
          gsap.from()
        </a>{' '}
        method.
      </p>

      <div className='mt-20'>
        <div ref={greenBoxRef} className='h-20 w-20 rounded-lg bg-green-500' />
      </div>
    </main>
  );
};

export default GsapFromPage;
