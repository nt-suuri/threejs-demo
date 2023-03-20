import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Landing from '../components/Landing';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import Intro from '../components/Intro';

const Home: NextPage = () => {

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
  }, []);
  return (
    <div className='h-screen bg-teal font-lato select-none'>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo " />
      </Head>
      <Navbar />
      <Intro />
      <div className="relative w-full h-full bg-black">
        <Landing />
        <Scene />
        <div className={width && width < 700 ? 'fixed h-full w-full opacity-0 z-40' : ''} />
      </div>
    </div>
  )
};

export default Home;
