import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { MdPlayCircleFilled, MdSkipNext, MdSkipPrevious } from 'react-icons/md'

import Box from '../../../3d/Models/Box'

type SplashProps = {
  onClick?: () => void
}

const SparkScene = dynamic(
  () => import('../../../../utils/SparkScene/SparkScene'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
)

const Splash = (props: SplashProps) => {
  const { onClick } = props

  return (
    <div className='h-full w-full p-5 text-zinc-100 dark:text-white'>
      <div className='absolute inset-0 z-10 bg-black opacity-60'>
        <SparkScene />
      </div>
      <div className='absolute inset-0 z-20 text-center uppercase content'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='relative text-white'>
            <div>
              <h1
                className='text-5xl md:text-7xl font-medium '
                style={{ fontFamily: 'Venera' }}
              >
                Nasha Tech
              </h1>
              <div className='h-5 overflow-hidden'>
                <h1
                  className='-translate-y-8 md:-translate-y-10 text-5xl md:text-7xl font-medium '
                  style={{ fontFamily: 'Venera' }}
                >
                  Nasha Tech
                </h1>
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <div className='mx-5'>
              <dl className='md:w-full text-xs mt-5'>
                <dt>
                  To make technology as accessible as possible for every people
                </dt>
              </dl>
              <div className='border-b border-white mt-5'></div>
              <div className='w-full flex items-center justify-center gap-5 mt-3'>
                <MdSkipPrevious className='w-12 h-12' />
                <button
                  className='rounded-full border border-white animate-tick'
                  onClick={onClick}
                >
                  <MdPlayCircleFilled className='w-6 h-6' />
                </button>
                <MdSkipNext className='w-12 h-12' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash
