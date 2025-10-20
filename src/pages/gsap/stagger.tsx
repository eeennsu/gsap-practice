import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { FC } from 'react';

const GsapStaggerPage: FC = () => {
  useGSAP(() => {
    gsap.to('.stagger-box', {
      y: 250,
      duration: 1,
      borderRadius: '100%',
      yoyo: true,
      repeat: -1,
      rotation: 360,
      stagger: {
        amount: 1.5, // 요소 시작 간격
        grid: [2, 1], // 2행 1열 배치
        axis: 'y', // y축 기준 순서
        ease: 'circ.inOut',
        from: 'random', // 무작위 시작
      },
    });
  });

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className='mt-5 text-gray-500'>
        GSAP stagger is a feature that allows you to apply animations with a staggered delay to a
        group of elements.
      </p>

      <p className='mt-5 text-gray-500'>
        By using the stagger feature in GSAP, you can specify the amount of time to stagger the
        animations between each element, as well as customize the easing and duration of each
        individual animation. This enables you to create dynamic and visually appealing effects,
        such as staggered fades, rotations, movements, and more.
      </p>

      <p className='mt-5 text-gray-500'>
        Read more about the{' '}
        <a
          href='https://gsap.com/resources/getting-started/Staggers'
          target='_blank'
          rel='noreferrer noopener nofollow'
        >
          Gsap Stagger
        </a>{' '}
        feature.
      </p>

      <div className='mt-20'>
        <div className='flex gap-5'>
          <div className='stagger-box h-20 w-20 rounded-lg bg-indigo-200' />
          <div className='stagger-box h-20 w-20 rounded-lg bg-indigo-300' />
          <div className='stagger-box h-20 w-20 rounded-lg bg-indigo-400' />
          <div className='stagger-box h-20 w-20 rounded-lg bg-indigo-500' />
          <div className='stagger-box h-20 w-20 rounded-lg bg-indigo-600' />
          <div className='stagger-box h-20 w-20 rounded-lg bg-indigo-700' />
          <div className='stagger-box h-20 w-20 rounded-lg bg-indigo-800' />
        </div>
      </div>
    </main>
  );
};

export default GsapStaggerPage;
