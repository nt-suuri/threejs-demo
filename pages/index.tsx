import type { NextPage } from "next";
import Head from "next/head";

import Navbar from '../components/Layout/Navbar';
import Scene from '../components/3d/Models/Torus';
import Landing from '../components/Pages/Home/About';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import Intro from '../components/Pages/Home/Intro';
import ToggleThemeButton from '../components/Layout/ToggleThemeButton';
import { Section } from "../components/Layout/Section";

import dynamic from "next/dynamic";

import { extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MeshLine, MeshLineMaterial } from "../utils/MeshLine";

extend({ MeshLine, MeshLineMaterial, OrbitControls });

const SparkScene = dynamic(() => import("../utils/SparkScene/SparkScene"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Home: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(false);
  useEffect(() => {
    setIsSSR(true);
  }, []);
  return (
    <div className="h-screen bg-teal font-lato select-none ">
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo " />
      </Head>
      <Navbar />
      <div className="overflow-x-hidden">
        <Intro />
      </div>
      <Section>
        <Landing />
        <Scene />
      </Section>
      <Section>
        <div className="bg-slate-300 dark:bg-gray-900 h-full">{isSSR && <SparkScene />}</div>
      </Section>
    </div>
  );
};

export default Home;
