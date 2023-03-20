import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Landing from '../components/Landing';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import Intro from '../components/Intro';
import ToggleThemeButton from '../components/ToggleThemeButton';

const Home: NextPage = () => {

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
  }, []);
  return (
    <div className='h-screen font-lato select-none bg-gray-400 dark:bg-black'>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo " />
      </Head>
      <Navbar />
      <div className='w-full'>
        <Intro />
      </div>
      <div className="w-full h-full bg-gray-400 dark:bg-black md:p-10">
        <Landing />
        <Scene />
        <div className={width && width < 700 ? 'fixed h-full w-full opacity-0 z-40' : ''} />
      </div>

      {/* <Footer /> */}
    </div>
  )
};

export default Home;
