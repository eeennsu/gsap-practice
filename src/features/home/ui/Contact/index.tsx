import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import type { FC } from 'react';

import { openingHours, socials } from '@entities/home/consts';

/*
  new SplitText와 SplitText.create의 차이
  - new Split() 
    - 명시적, js 표준 객체 생성 방식
  - SplitText.create()
    - 조금 더 간결한 helper 스타일. 

  둘다 같은 객체임. 표현의 방식이 다를 뿐
*/
const Contact: FC = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
      },
    });

    const h2SplitText = SplitText.create('.content h2', { type: 'chars, words' });

    tl.fromTo(
      h2SplitText.words,
      {
        yPercent: 20,
        opacity: 0,
        duration: 1,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.03,
      },
    )
      .from(
        '.content h3, .content p',
        {
          yPercent: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.015,
        },
        '-=0.7',
      )
      .to(
        '#f-right-leaf',
        {
          rotation: 26,
          scale: 1.2,
          duration: 1.8,
        },
        '-=1',
      )
      .to(
        '#f-left-leaf',
        {
          rotation: -26,
          scale: 1.3,
          duration: 2,
          xPercent: 2,
          yPercent: -14,
        },
        '-=1.5', // '<' 이면, 바로 이전 애니메이션이 시작되는 시점에 같이 시작하라는 뜻
      );
  });

  return (
    <footer id='contact'>
      <img src='/images/footer-right-leaf.png' alt='leaf-right' id='f-right-leaf' />
      <img src='/images/footer-left-leaf.png' alt='leaf-left' id='f-left-leaf' />

      <div className='content'>
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map(time => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className='flex-center gap-5'>
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
