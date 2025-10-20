import { Link } from 'react-router-dom';

const animations = [
  {
    title: 'GSAP To',
    description:
      'The to() method is used to animate a single element from a starting state to an ending state.',
    path: '/gsap-to',
  },
  {
    title: 'GSAP From',
    description:
      'The from() method is used to animate a single element from an ending state to a starting state.',
    path: '/gsap-from',
  },
  {
    title: 'GSAP FromTo',
    description:
      'The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.',
    path: '/gsap-fromto',
  },
  {
    title: 'GSAP Timeline',
    description:
      'The timeline() method is used to create a timeline to manage multiple animations.',
    path: '/gsap-timeline',
  },
  {
    title: 'GSAP Stagger',
    description: 'The stagger() method is used to animate multiple elements with a stagger effect.',
    path: '/gsap-stagger',
  },
  {
    title: 'GSAP ScrollTrigger',
    description:
      'The ScrollTrigger plugin is used to trigger animations based on the scroll position.',
    path: '/gsap-scrolltrigger',
  },
  {
    title: 'GSAP Text',
    description: 'Learn how to animate text with GSAP.',
    path: '/gsap-text',
  },
];

const Home = () => {
  return (
    <main className='container'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-zinc-50'>GSAP Animations</h1>
        <ol className='mt-10 flex flex-col'>
          {animations.map((animation, index) => (
            <li key={index} className='flex flex-row gap-2 rounded-lg p-5 hover:bg-zinc-800/50'>
              <p>
                <span className='text-sm font-bold text-zinc-50'>{index + 1}.</span>
              </p>
              <div className='flex flex-1 flex-col gap-2'>
                <Link to={animation.path} className='text-md font-semibold text-blue-600'>
                  {animation.title}
                </Link>
                <p className='text-xs text-gray-400'>{animation.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
