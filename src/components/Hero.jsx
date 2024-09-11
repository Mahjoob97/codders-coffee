import React from 'react'
import BgImage from '../assets/bg-slate.png'

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

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* text content section */}
                    <div className='text-lightOrange'>
                        <h1 className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                    </div>
                    <div>
                        <div>
                            <h1>
                                Black Lovers Lifestyle, 
                            </h1>
                            <h1>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Incidunt asperiores sapiente possimus inventore vel et enim accusantium, 
                                ab praesentium atque provident est tenetur quasi impedit, 
                                dicta molestias saepe, necessitatibus iusto?
                            </h1>
                        </div>
                    </div>
                    {/* hero image section */}
                    <div>

                    </div>
                    {/* third div section */}
                    <div>

                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero