import React from 'react'
import Button from '../../../components/Button'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Image from 'next/image'

import product1 from '../../../assets/product-001.png';


const wordSpacingtStyle = {
    wordSpacing: '8px', // Adjust the value as per your requirement
};




export default function Product1() {
  return (
        <>  
        <Navbar/>

            <div className="w-full h-max   px-[20px]  md:px-[32px] lg:px-[80px] pt-[100px]">
                <a className=" cursor-pointer text-[14px]  md:text-[20px] font-semibold">Home </a>
                <span className=" font-semibold text-[14px] md:text-[20px]">  &gt; </span>
                <a className=" cursor-pointer text-[14px]  md:text-[20px] font-semibold"> Our Products</a>

                <span className=" font-semibold text-[14px] md:text-[20px] ">  &gt; </span>
                <a className=" cursor-pointer text-[14px]  md:text-[20px] font-semibold ">AI Innovation Lab</a>


                <h1 className=" text-[32px] md:text-[48px] font-bold pt-[20px] md:pt-[40px] text-center text-[#1485EC]">AI Innovation Lab</h1>
                <Image src={product1} alt="product1" width={500} height={500}  className='m-auto p-2'/>
                
                <div className='flex gap-8'>
                    <div className='text-md font-semibold ' style={wordSpacingtStyle}>
                    AI Innovation Lab is a comprehensive platform designed to enhance learning and skill development in technology fields. It provides smart assessments, AI-enabled guidance, and personalized feedback, helping students master technical skills and preparing them for successful careers in the tech industry. By leveraging advanced AI tools, the platform ensures effective learning experiences and attracts top employers seeking the best talent.
                    </div>

                    <div className='text-[16px]'>
                        <Button bgColor={"bg-[#1485EC]"} content="Try Now"/>
                    </div>

                </div>
                
                <h1 className=" text-[24px] md:text-[32px] font-bold pt-[20px]  md:pt-[40px] ">Begin Your Journey</h1>
                            
            <div className='py-3'>
                <span class='text-xl md:text-2xl font-bold'>Navigation the Platform</span>

                <ul class="list-disc pl-4 mt-4 ml-3">
                    <li class="mb-2">Go to the AI Innovation Lab's homepage on our website.</li>
                    <li class="mb-2">Select the "AI Innovation Lab" option from the available frameworks.</li>
                </ul>
            </div>

            <div className='py-3'>
                <span class='text-xl md:text-2xl font-bold'>Navigation the Platform</span>

                <ul class="list-disc pl-4 mt-4 ml-3">
                    <li class="mb-2">Go to the AI Innovation Lab's homepage on our website.</li>
                    <li class="mb-2">Select the "AI Innovation Lab" option from the available frameworks.</li>
                </ul>
            </div>

            <div className='py-3'>
                <span class='text-xl md:text-2xl font-bold'>Navigation the Platform</span>

                <ul class="list-disc pl-4 mt-4 ml-3">
                    <li class="mb-2">Go to the AI Innovation Lab's homepage on our website.</li>
                    <li class="mb-2">Select the "AI Innovation Lab" option from the available frameworks.</li>
                </ul>
            </div>

            <div className='py-3'>
                <span class='text-xl md:text-2xl font-bold'>Navigation the Platform</span>

                <ul class="list-disc pl-4 mt-4 ml-3">
                    <li class="mb-2">Go to the AI Innovation Lab's homepage on our website.</li>
                    <li class="mb-2">Select the "AI Innovation Lab" option from the available frameworks.</li>
                </ul>
            </div>



            </div>

            <Footer />
        </>
  )
}
