import type { NextPage } from "next";
import Head from "next/head";

import { Navbar, Section } from "../components/Layout";
import Scene from "../components/3d/Models/Torus";
import Landing from "../components/Pages/Home/About";
import Intro from "../components/Pages/Home/Intro";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ToggleThemeButton from "../components/Layout/ToggleThemeButton";

import { extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MeshLine, MeshLineMaterial } from "../utils/MeshLine";
import Process from "../components/Pages/Home/Process";

extend({ MeshLine, MeshLineMaterial, OrbitControls });

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-teal font-lato select-none">
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo " />
      </Head>
      <Navbar />
      <Section bg="bg-zinc-200">
        <Intro />
      </Section>
      <Section>
        <Landing />
        <Scene />
      </Section>

      <Section bg="bg-black">
        <Process />
      </Section>
    </div>
  );
};

export default Home;
