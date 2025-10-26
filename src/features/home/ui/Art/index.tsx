import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { featureLists, goodLists } from '@entities/home/consts';

/*
  scrub: true → 스크롤 위치에 즉시 동기화 (스크롤할 때마다 바로 반응)
  scrub: number → 스크롤 위치에 부드럽게 따라가도록 애니메이션 보간
*/
const Art: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start: isMobile ? 'top 20%' : 'top top',
        end: 'bottom center',
        scrub: 1.7, // 스크롤 제어가 부드러워짐. 애니메이션이 스크롤을 따라가지만 지연이 발생
        pin: true,
      },
    });

    tl.to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
      .to('.masked-img', {
        scale: 1.3,
        maskPosition: 'center',
        maskSize: '400%',
        duration: 1,
        ease: 'power1.inOut ',
      })
      .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  });

  return (
    <div id='art'>
      <div className='container mx-auto h-full pt-10'>
        <h2 className='will-fade'>The ART</h2>

        <div className='content'>
          <ul className='will-fade space-y-4'>
            {goodLists.map((feature, index) => (
              <li key={index} className='flex items-center gap-2'>
                <img src='/images/check.png' alt='check' />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className='cocktail-img'>
            <img
              src='/images/under-img.jpg'
              alt='cocktail'
              className='abs-center masked-img size-full object-contain'
            />
          </div>

          <ul className='will-fade space-y-4'>
            {featureLists.map((feature, index) => (
              <li key={index} className='flex items-center justify-start gap-2'>
                <img src='/images/check.png' alt='check' />
                <p className='w-60 md:w-fit'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='masked-container'>
          <h2 className='will-fade'>Sip-Worthy Perfection</h2>
          <div id='masked-content'>
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
