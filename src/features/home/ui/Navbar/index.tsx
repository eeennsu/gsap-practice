import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { FC } from 'react';

import { navLinks } from '@entities/home/consts';

const Navbar: FC = () => {
  const NAV_KEY = 'nav';

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: NAV_KEY,
        start: 'bottom top',
        scrub: true,
      },
    });

    navTween.fromTo(
      NAV_KEY,
      {
        backgroundColor: 'transparent',
      },
      {
        backgroundColor: 'rgba(255, 255, 255, 0.01)', // 유리 반투명
        backdropFilter: 'blur(10px)', // 배경 블러
        duration: 2,
        ease: 'power1.inOut',
      },
    );
  });

  return (
    <nav>
      <div>
        <a href='#home' className='flex items-center gap-2'>
          <img src='/images/logo.png' alt='logo' />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
