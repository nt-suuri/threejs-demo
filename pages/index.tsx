// @default
import { useState } from 'react'
import Head from 'next/head'
import { extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MeshLine, MeshLineMaterial } from '../utils/MeshLine'

// @components
import { Navbar, Section } from '../components/Layout'
import { Splash, Intro } from '../components/Pages/Home'

// types
import type { NextPage } from 'next'

extend({ MeshLine, MeshLineMaterial, OrbitControls })

const Home: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(false)

  const [isSplash, setIsSplash] = useState<boolean>(true)

  return (
    <>
      <Head>
        <title>Nasha Tech LLC</title>
        <meta name='description' content='Demo ' />
      </Head>

      {isSplash ? (
        <div
          className={`h-screen bg-black splash ${
            isSplash ? 'active' : ''
          }`}
        >
          <Section bg='bg-transparent'>
            <Splash onClick={() => setIsSplash(false)} />
          </Section>
        </div>
      ) : (
        <div className='w-full bg-black/[0.9] overflow-x-hidden'>
          <Section bg='bg-transparent'>
            <Intro />
          </Section>
          <Section bg='bg-transparent'></Section>
          <Section bg='bg-transparent'></Section>
          <Section bg='bg-transparent'></Section>
        </div>
      )}
    </>
  )
}

export default Home
