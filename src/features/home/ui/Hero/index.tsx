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
      stagger: 0.08, // 각 요소 간의 간격을 지정 (하나당 0.08초 필수 소요)
    })
      .from(
        p1Split.lines,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.8,
          stagger: {
            amount: 0.2, // 전체 분산 시간을 지정 (전체 애니메이션이 0.2초 동안에 균등 분배됨)
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
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .fromTo(
        '.right-leaf',
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 200,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        },
        0,
      )
      .fromTo(
        '.left-leaf',
        {
          y: 0,
          opacity: 0,
        },
        {
          y: -200,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        },
        0,
      )
      .to(
        '.arrow',
        {
          y: 100,
        },
        0,
      );
  });

  useGSAP(() => {
    const videoElement = videoRef.current;

    if (!videoElement) {
      return;
    }

    // 스크롤 구간 (start, end) 동안 video가 0초에서 전체 길이까지 연동해서 재생되도록 해라.
    // scroll trigger는 스크롤 위치를 0 ~ 1
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: isMobile ? 'top 50%' : 'center 60%', // 데스크탑 : 비디오 중앙이 닿는 순간 스타트 / 모바일 : 비디오 상단이 닿는 순간 스타트
        end: isMobile ? '120% top' : 'bottom top', // 데스크탑 : 비디오 하단이 닿을 때 end / 모바일 : 비디오 상단이 완전히 지나가고 20% 더 스크롤했을 때 end
        scrub: true, // 스크롤 위치와 애니메이션 진행 정도를 동기화 시켜줌 (내릴 때 재생, 올릴 때 역재생)
        pin: true,
      },
    });

    const handleLoadedMetadata = () => {
      tl.to(videoElement, {
        currentTime: videoElement.duration,
      });
    };

    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      tl.kill();
    };
  }, [isMobile]);

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
