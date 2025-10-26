import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, type FC } from 'react';

import { allCocktails } from '@entities/home/consts';

const Menu: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useGSAP(() => {
    gsap.fromTo(
      '#title',
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: 'power2.out',
      },
    );
    gsap.fromTo(
      '.cocktail img',
      {
        xPercent: -100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      },
    );

    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out',
      },
    });

    tl.fromTo(
      '.details h2',
      {
        yPercent: 30,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      },
    ).fromTo(
      '.details p',
      {
        yPercent: 20,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.6',
    );

    gsap.fromTo(
      '#prev-cocktail-name',
      { opacity: 0, xPercent: 5 },
      { opacity: 1, xPercent: 0, duration: 1.2 },
    );
    gsap.fromTo(
      '#next-cocktail-name',
      { opacity: 0, xPercent: -5 },
      { opacity: 1, xPercent: 0, duration: 1.2 },
    );

    // dependency array를 넣으면, 해당 변수의 값들이 바뀔때마다 애니메이션이 다시 실행됨.
  }, [currentIndex]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#menu',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    tl.to('#m-right-leaf', {
      rotate: 50,
      x: -150,
      scale: 1.75,
      duration: 1,
    }).to('#m-left-leaf', {
      rotate: 55,
      duration: 1.75,
      scale: 2,
      y: -200,
      x: 160,
    });
  });

  const totalCocktails = allCocktails.length;

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset: number) => {
    return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id='menu' aria-labelledby='menu-heading'>
      <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf' />
      <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf' />

      <h2 id='menu-heading' className='sr-only'>
        Cocktail Menu
      </h2>

      <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={` ${
                isActive ? 'border-white text-white' : 'border-white/50 text-white/50'
              } `}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className='content'>
        <div className='arrows'>
          <button
            className='flex flex-col items-center text-left'
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span className='whitespace-nowrap' id='prev-cocktail-name'>
              {prevCocktail.name}
            </span>
            <img src='/images/right-arrow.png' alt='right-arrow' aria-hidden='true' />
          </button>

          <button
            className='flex flex-col items-center text-left'
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span className='whitespace-nowrap' id='next-cocktail-name'>
              {nextCocktail.name}
            </span>
            <img src='/images/left-arrow.png' alt='left-arrow' aria-hidden='true' />
          </button>
        </div>

        <div className='cocktail'>
          <img src={currentCocktail.image} className='object-contain' />
        </div>

        <div className='recipe'>
          <div ref={contentRef} className='info'>
            <p>Recipe for:</p>
            <p id='title'>{currentCocktail.name}</p>
          </div>

          <div className='details'>
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
