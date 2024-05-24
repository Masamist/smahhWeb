import React from 'react'
import Image from 'next/image'
import AnyQuestion from '@/components/AnyQuestion';

const partnerLogos: { company: string; image: string, width: number, height: number }[] = [
  { company: "Microsoft",
    image: '/assets/logo-microsoft.png',
    width: 200,
    height: 80,
  },
  { company: "Amazon",
    image: '/assets/logo-amazon.png',
    width: 150,
    height: 80,
  },
  { company: "Google Cloud",
    image: '/assets/logo-google.png',
    width: 220,
    height: 80,
  },
  { company: "Cisco",
    image: '/assets/logo-cisco.png',
    width: 150,
    height: 80,
  },
]
const About = () => {
  return (
    <>
      <div className="flex flex-col px-10 w-full items-center
       bg-midnight-900 bg-cetner-top bg-cover bg-one">
        <div className="flex flex-row items-start max-w-[1260px] pt-20 mb-14 pb-5 gap-10">
          <div className="w-1/2">
            <h3 className="text-xl text-white pb-4">About Smahh</h3>
            <h1 className="text-5xl font-light leading-[3.8rem] text-white pb-4">We support Local and <br />Global businesses</h1>
            <p className="text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-1/2 h-[26rem] relative">
            <div className='absolute z-50 top-0 right-0 shadow-sm'>
              <Image src='/assets/about1.png' width={400} height={250} alt='Office image' />
            </div>
            <div className='absolute z-40 bottom-0 left-0 shadow-sm'>
              <Image src='/assets/about2.png' width={400} height={250} alt='Office image' />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-a px-10 py-32 w-full items-center">   
        <div className="flex flex-row md:flex-row max-w-[1260px] px-20 py-14  w-full gap-14 
        bg-gray-200 rounded-md justify-center shadow-lg">
          <div className='pr-20'>
            <Image src="/assets/about-manager.png" alt="Manager Image" width={200} height={200} />
          </div>
          <div className='w-3/5'>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.
            </p>
            <h4 className='text-lg font-semibold pt-3'>Managing Director <span className='font-normal pl-2'>Tom Smith</span></h4>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center px-5 py-5 gap-3'>
        <h3 className='text-2xl font-semibold pb-8'>Smahh Partners</h3>
        <div className='flex flex-row justify-between items-center max-w-[1260px] w-full'>
          {partnerLogos?.map((item, index) => (
            <div key={index} className='w-45'>
            <Image src={item.image} alt={`${item.company} Logo`} width={item.width} height={item.height} />
          </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-a px-10 py-32 w-full items-center">   
        <div className="flex flex-col max-w-[1260px] px-20 py-20 w-full gap-10
        bg-midnight-900 rounded-md justify-center shadow-lg">
          <div className='flex flex-col md:flex-row pb-10'>
            <div className='w-1/3'>
              <h3 className='text-3xl text-white'>Why Smahh?</h3>
            </div>
            <div className='w-2/3'>
              <p className='text-lg text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip.
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-betweeen pt-10 gap-20'>
            <div className='w-1/3 flex flex-col items-center'>
              <Image src='/assets/icon-experienced.png' alt='Experience Icon' width={80} height={80} />
              <h4 className='text-xl text-white font-semibold pt-5'>Experienced</h4>
              <p className="text-sm font-light text-white text-center pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
            <div className='w-1/3 flex flex-col items-center'>
              <Image src='/assets/icon-experienced.png' alt='Experience Icon' width={80} height={80} />
              <h4 className='text-xl text-white font-semibold pt-5'>Experienced</h4>
              <p className="text-sm font-light text-white text-center pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
            <div className='w-1/3 flex flex-col items-center'>
              <Image src='/assets/icon-experienced.png' alt='Experience Icon' width={80} height={80} />
              <h4 className='text-xl text-white font-semibold pt-5'>Experienced</h4>
              <p className="text-sm font-light text-white text-center pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>
        </div>
        <AnyQuestion />
      </div>
    </>
  )
}

export default About