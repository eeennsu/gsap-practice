import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import type { FC } from 'react';

// import Contact from '@features/home/ui/Contact';
// import Menu from '@features/home/ui/Menu';
// import About from '@features/home/ui/About';
// import Art from '@features/home/ui/Art';
// import Cocktails from '@features/home/ui/Cocktails';
// import Hero from '@features/home/ui/Hero';
import Navbar from '@features/home/ui/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomePage: FC = () => {
  return (
    <main>
      <Navbar />
      {/* <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact /> */}
    </main>
  );
};

export default HomePage;
