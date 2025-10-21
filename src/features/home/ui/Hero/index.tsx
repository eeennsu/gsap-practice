import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef, type FC } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // .title 요소를 찾아서, 그 안의 텍스트를 글자와 단어 단위로 나눔
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const p1Split = new SplitText('.st1', { type: 'lines' });
    const p2Split = new SplitText('.st2', { type: 'lines' });
    heroSplit.chars.forEach(char => char.classList.add('text-gradient'));

    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });

    tl.from(heroSplit.chars, {
      y: 250,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
    })
      .from(
        p1Split.lines,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.8,
          stagger: {
            amount: 0.2,
          },
        },
        '-=0.3', // 이전 애니메이션이 끝나기 0.3초 전에 시작
      )
      .from(
        p2Split.lines,
        {
          yPercent: 45,
          opacity: 0,
          duration: 1.2,
          stagger: {
            amount: 0.4,
          },
        },
        '-=0.2',
      );
  });

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: 'video',
      start: isMobile ? 'top 50%' : 'center bottom',
      end: isMobile ? '120% top' : 'bottom top',
    });

    const video = videoRef.current;
    if (!video) return;

    const scrubVideo = () => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;

      t1.to(videoRef.current, {
        currentTime: duration,
      });
    };

    if (video.readyState >= 1) {
      scrubVideo();
    } else {
      video.addEventListener('loadedmetadata', scrubVideo, { once: true });
    }
  });

  return (
    <>
      <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>

        <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf' />
        <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf' />

        <div className='body'>
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className='content'>
            <div className='hidden space-y-5 md:block'>
              <p>Cool. Crisp. Classic.</p>
              <p className='subtitle st1'>
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className='view-cocktails'>
              <p className='subtitle st2'>
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and
                timeless recipes — designed to delight your senses.
              </p>
              <a href='#cocktails'>View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className='video absolute inset-0'>
        <video ref={videoRef} muted playsInline preload='auto' src='/videos/output.mp4' />
      </div>
    </>
  );
};

export default Hero;
