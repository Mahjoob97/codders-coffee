import React from 'react'
import BgImage from '../assets/bg-slate.png'
import TheMug from '../assets/Black.png'
import Navbar from './Navbar'
import {motion} from 'framer-motion'

const bgImage = {
    backgroundImage: `url(${BgImage})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

function Hero() {
  return (
    <main style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className="container">
                {/* navbar section */}
                <Navbar/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
                    {/* text content section */}
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                        <div className='relative'>
                            <div className='relative space-y-4 z-10'>
                                <h1 className='text-2xl'>
                                    Black Lovers Lifestyle, 
                                </h1>
                                <h1 className='text-sm opacity-55 leading-loose'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Incidunt asperiores sapiente possimus inventore vel et enim accusantium, 
                                    ab praesentium atque provident est tenetur quasi impedit, 
                                    dicta molestias saepe, necessitatibus iusto?
                                </h1>
                            </div>
                            <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                        </div>
                    </div>
                    
                    {/* hero image section */}
                    <div className='relative'>
                        <img src={TheMug} alt="blackMug" className='relative z-40 h-[400px] md:h-[700px] img-shadow' />
                        {/* Orange circle */}
                        <div className='absolute top-24 -right-16 border-primary rounded-full h-[180px] w-[180px] z-10 border-[20px] '></div>

                        {/* big text section */}
                        <div className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className="text-[140px] sclae-150 font-bold text-darkGray/40 leading-none">
                                Black Tumbler
                            </h1>
                        </div>
                    </div>

                    {/* third div section */}
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className=' opacity-0 text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                        <div className='relative'>
                            <div className='relative space-y-4 z-10'>
                                <h1 className='text-2xl'>
                                    Blvck Tumbler
                                </h1>
                                <h1 className='text-sm opacity-55 leading-loose'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Incidunt asperiores sapiente possimus inventore vel et enim accusantium, 
                                </h1>
                            </div>
                            <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero