import type { NextPage } from "next";
import Head from "next/head";

import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Landing from '../components/Landing';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import Intro from '../components/Intro';
import ToggleThemeButton from '../components/ToggleThemeButton';
import { Section } from "../components/layouts/Section";

import dynamic from "next/dynamic";

import { extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MeshLine, MeshLineMaterial } from "../utils/MeshLine";

extend({ MeshLine, MeshLineMaterial, OrbitControls });

const SparkScene = dynamic(() => import("../components/SparkScene"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Home: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(false);
  useEffect(() => {
    setIsSSR(true);
  }, []);
  return (
    <div className="h-screen bg-teal font-lato select-none">
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo " />
      </Head>
      <Navbar />
      <div className="overflow-x-hidden">
        <Intro />
      </div>

      <Section>
        <div className="relative w-full h-full bg-black">
          <Landing />
          <Scene />
        </div>
      </Section>
      <Section>
        <div className="bg-black h-full">{isSSR && <SparkScene />}</div>
      </Section>
    </div>
  );
};

export default Home;
