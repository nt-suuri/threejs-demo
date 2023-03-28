import type { NextPage } from "next";
import Head from "next/head";

import { Navbar, Section } from "../components/Layout";
import Scene from "../components/3d/Models/Torus";
import Landing from "../components/Pages/Home/About";
import Intro from "../components/Pages/Home/Intro";
import ToggleThemeButton from "../components/Layout/ToggleThemeButton";

import { extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MeshLine, MeshLineMaterial } from "../utils/MeshLine";
import Process from "../components/Pages/Home/Process";
import { preloadFonts } from "../utils/TypoScene/utils";
import { TypeShuffle } from "../utils/TypoScene/typeShuffle";
import { useEffect, useState } from "react";

extend({ MeshLine, MeshLineMaterial, OrbitControls });

const Home: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(false);
  useEffect(() => {
    preloadFonts('biu0hfr').then(() => {
      document.body.classList.remove('loading');

      const textElement = document.querySelector('.content');

      const ts = new TypeShuffle(textElement!);
      ts.trigger('fx5');
    });
    setIsSSR(true);

  }, []);
  return (
    <div className="h-screen bg-teal font-lato select-none">
      <Head>
        <title>Nasha Tech LLC</title>
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
      <ToggleThemeButton />
    </div>
  );
};

export default Home;
