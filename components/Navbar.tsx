import { useState, useRef } from 'react';

import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useSpring, animated } from 'react-spring';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import useWindowDimensions from '../hooks/useWindowDimensions';

const Navbar = ({ isFixed }: { isFixed?: boolean }) => {
  const [active, setActive] = useState(false);
  const { height, width } = useWindowDimensions();
  const triggerRef = useRef(null);
  const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: false });
  const triggerRefScroll = useRef(null);
  const dataRefScroll = useIntersectionObserver(triggerRefScroll, { freezeOnceVisible: false });

  const defaultAnimatedProps = useSpring({
    from: { opacity: 0, top: -400 },
    to: { opacity: dataRef?.isIntersecting ? 1 : 0, top: dataRef?.isIntersecting ? 0 : -400 },
    config: { mass: 1, tension: 150, friction: 15 }
  });

  const scrollAnimatedProps = useSpring({
    from: { opacity: 0, top: -400 },
    to: { opacity: dataRefScroll?.isIntersecting ? 1 : 0, top: dataRefScroll?.isIntersecting ? 0 : -400 },
    config: { mass: 1, tension: 150, friction: 15 }
  });

  const animatedProps = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: active || (width && width >= 1024) ? 1 : 0, marginTop: active || (width && width >= 1024) ? 0 : -300 },
    config: { mass: 1, tension: 150, friction: 10 }
  });

  const navbar = (position: string) => (
    <>
      <animated.div style={(position == 'absolute') ? defaultAnimatedProps : scrollAnimatedProps} className={(position == 'absolute') ? 'absolute z-50 w-full top-0' : 'z-50 w-full top-0 fixed'}>
        <nav className='flex items-center flex-wrap p-3 mr-6'>
          <Link href='/'>
            <a className='inline-flex items-center m-5 p-1 bg-teal backdrop-blur-sm bg-opacity-20 rounded-xl'>
              Logo is here
            </a>
          </Link>
          <div className='z-40 inline-flex m-2 mt-1 mr-0 p-1 lg:hidden ml-auto outline-none bg-teal backdrop-blur-sm bg-opacity-20 rounded-xl'>
            <Hamburger toggled={active} toggle={setActive} color={position == 'fixed' ? "#edf5e1" : '#05396b'} distance="sm" />
          </div>
          <div className={` absolute lg:top-0 lg:relative top-24 ml-5 w-34 lg:inline-flex lg:flex-grow lg:w-auto`}>
            <animated.div style={{ ...animatedProps }} className="lg:ml-auto bg-teal backdrop-blur-sm bg-opacity-20 rounded-xl">
              <div className='lg:inline-flex lg:flex-row lg:w-auto lg:items-center flex flex-col items-start lg:h-auto'>
                <Link href='/blog'>
                  <a className={(position == 'fixed' ? "text-white hover:text-pine" : 'text-navy hover:text-white') + " text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded font-bold items-center justify-center"}>
                    About
                  </a>
                </Link>
                <Link href='/dojoe'>
                  <a className={(position == 'fixed' ? "text-white hover:text-pine" : 'text-navy hover:text-white') + " text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded font-bold items-center justify-center"}>
                    Vision
                  </a>
                </Link>
                <Link href='/bucketlist'>
                  <a className={(position == 'fixed' ? "text-white hover:text-pine" : 'text-navy hover:text-white') + " text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded font-bold items-center justify-center"}>
                    Mission
                  </a>
                </Link>
              </div>
            </animated.div>
          </div>
        </nav>
      </animated.div>
      <div className='absolute top-10' ref={triggerRef} />
      <div className='absolute max-top' ref={triggerRefScroll} />
    </>
  );

  return (
    <>
      <div>
        {navbar("absolute")}
      </div>
      <div>
        {navbar("fixed")}
      </div>
    </>
  );
};

export default Navbar;