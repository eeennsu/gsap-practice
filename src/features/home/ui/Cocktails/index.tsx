import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { FC } from 'react';

import { cocktailLists, mockTailLists } from '@entities/home/consts';

const Cocktails: FC = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'sine.out',
      },
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 35%',
        end: 'bottom 0%',
        scrub: true,
      },
    });

    tl.from('#c-left-leaf', {
      x: -100,
      y: 100,
      scale: 0.4,
      rotation: 45,
    })
      .from('#c-right-leaf', {
        x: 100,
        y: -50,
        scale: 0.6,
        rotation: 25,
      })
      .to(['#c-left-leaf', '#c-right-leaf'], {
        y: '-=10',
        duration: 1,
      });
  });

  return (
    <section id='cocktails' className='noisy'>
      <img src='/images/cocktail-left-leaf.png' alt='l-leaf' id='c-left-leaf' />
      <img src='/images/cocktail-right-leaf.png' alt='r-leaf' id='c-right-leaf' />

      <div className='list'>
        <div className='popular'>
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='loved'>
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
