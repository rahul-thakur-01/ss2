import React from 'react';
import Image from 'next/image';

import rec from '../assets/rec.png';
import Button from './Button';

export default function Service() {
  return (
    <div className='w-[100%]  relative max-h-[60vh] overflow-scroll pl-16' >


      <div className='w-full min-h-[60vh] bg-white sticky top-0 z-1 pl-16'>
        <div className=''>
          <div className='flex gap-10 pl-10'>
            <div className='flex flex-col gap-10'>
              <span className=' text-[16px] md:text-[36px] font-bold pl-3'>Our AI Services</span>

              <div>
                <p className='py-5 text-2xl font-semibold'>University</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex
                </span>
              </div>

              <Button bgColor='bg-[#36DBB3]' />

              <div>
                
              </div>
            </div>
            <Image src={rec} alt='product1' className='p-2 h-[100%] ' />
          </div>
        </div>
      </div>


      <div className='w-full min-h-[60vh] bg-white sticky top-0 z-1 pl-16'>
        <div className=''>
          <div className='flex gap-10 pl-10'>
            <div className='flex flex-col gap-10'>
              <span className=' text-[16px] md:text-[36px] font-bold pl-3'>Our AI Services</span>

              <div>
                <p className='py-5 text-2xl font-semibold'>University</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex
                </span>
              </div>

              <Button bgColor='bg-[#36DBB3]' />

              <div>
                
              </div>
            </div>
            <Image src={rec} alt='product1' className='p-2 h-[100%] ' />
          </div>
        </div>
      </div>

      <div className='w-full min-h-[60vh] bg-white sticky top-0 z-1 pl-16'>
        <div className=''>
          <div className='flex gap-10 pl-10'>
            <div className='flex flex-col gap-10'>
              <span className=' text-[16px] md:text-[36px] font-bold pl-3'>Our AI Services</span>

              <div>
                <p className='py-5 text-2xl font-semibold'>University</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex
                </span>
              </div>

              <Button bgColor='bg-[#36DBB3]' />

              <div>
                
              </div>
            </div>
            <Image src={rec} alt='product1' className='p-2 h-[100%] ' />
          </div>
        </div>
      </div>


     

    </div>
  );
}
