import { useState } from 'react'
import dynamic from 'next/dynamic'

import LogoParticles from '../Process/LogoParticles'

const SparkScene = dynamic(
  () => import('../../../../utils/SparkScene/SparkScene'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
)

const Intro = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true)

  return (
    <div className='h-full w-full flex justify-center items-center px-5 md:px-16'>
      <div className='w-full'>
        <h1
          className='text-4xl md:text-5xl font-medium mb-5'
          style={{ fontFamily: 'Venera' }}
        >
          Nasha Tech
        </h1>
        <p>
          By taking advantage of the flexibility, and fast adaptability of
          nomads we can master advanced technology first to aid our business
          while maintaining close contact with our customers.
        </p>
      </div>
      <div className='w-full'>
        {isSSR ? (
          <SparkScene />
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            <LogoParticles />
          </div>
        )}
      </div>
    </div>
  )
}
export default Intro
