// @default
import { useState } from 'react'
import Head from 'next/head'

// @components
import { Navbar, Section } from '../components/Layout'

// types
import type { NextPage } from 'next'
import Intro from '../components/Pages/Home/Intro'

const Home: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Nasha Tech LLC</title>
        <meta name='description' content='Demo ' />
      </Head>
      <div className='h-[600vh] w-full bg-black/[0.9] overflow-x-hidden'>
        <Section bg='bg-transparent'>
          <Intro />
        </Section>
      </div>
    </>
  )
}

export default Home
