import React from 'react'
import Button from './Button'

export default function Product1() {
  return (
        <>  
            <div className="w-full h-max   px-[20px]  md:px-[32px] lg:px-[80px] pt-[100px]">
                <a className="text-white cursor-pointer text-[14px]  md:text-[20px]">Home </a>
                <span className="text-white font-semibold text-[14px] md:text-[20px]">  &gt; </span>
                <a className="text-white cursor-pointer text-[14px]  md:text-[20px]"> Our Products</a>

                <span className="text-white font-semibold text-[14px] md:text-[20px]">  &gt; </span>
                <a className="text-white cursor-pointer text-[14px]  md:text-[20px]">AI Innovation Lab</a>

                <h1 className="text-white text-[32px] md:text-[48px] font-bold pt-[20px] md:pt-[40px]">AI Innovation Lab</h1>

                // image 

                <div className='flex'>
                    <div>
                    AI Innovation Lab is a comprehensive platform designed to enhance learning and skill development in technology fields. It provides smart assessments, AI-enabled guidance, and personalized feedback, helping students master technical skills and preparing them for successful careers in the tech industry. By leveraging advanced AI tools, the platform ensures effective learning experiences and attracts top employers seeking the best talent.
                    </div>
                    <Button className="bg-[#FF8A47] text-white text-[14px] md:text-[20px] font-semibold px-[20px] py-[10px] md:px-[40px] md:py-[20px] rounded-[5px] mt-[20px] md:mt-[40px]">Try Now</Button>


                </div>

                <span>Begin Your journey</span>

                <div>

                    <span>Navigation the Platform</span>

                    <ul>
                        <li>
                        Go to the AI Innovation Lab's homepage on our website.
                        </li>

                        <li>
                        Select the "AI Innovation Lab" option from the available frameworks.
                        </li>
                    </ul>

                </div>

                <div>

                    <span>Navigation the Platform</span>

                    <ul>
                        <li>
                        Go to the AI Innovation Lab's homepage on our website.
                        </li>

                        <li>
                        Select the "AI Innovation Lab" option from the available frameworks.
                        </li>
                    </ul>

                </div>

                <div>

                    <span>Navigation the Platform</span>

                    <ul>
                        <li>
                        Go to the AI Innovation Lab's homepage on our website.
                        </li>

                        <li>
                        Select the "AI Innovation Lab" option from the available frameworks.
                        </li>
                    </ul>

                </div>

                <div>

                    <span>Navigation the Platform</span>

                    <ul>
                        <li>
                        Go to the AI Innovation Lab's homepage on our website.
                        </li>

                        <li>
                        Select the "AI Innovation Lab" option from the available frameworks.
                        </li>
                    </ul>

                </div>


            </div>
        </>
  )
}
