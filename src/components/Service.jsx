// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion} from 'framer-motion'
import Coffee1 from '../assets/coffee1.png'
import Coffee3 from '../assets/coffee3.png'

function Service() {
    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0},
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
            ease: 'easeInOut'
        }
    }
    const conatainerVariant = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.6,
                staggerChildren: 0.4
            }
        }
    }
    const serviceData = [
        {
            id:1,
            image: Coffee1,
            title: 'Black Coffee',
            subtitle: 'lorem ipsum dolor sit amet, consectoter adipiscing elite'
        },
        {
            id:2,
            image: Coffee3,
            title: 'Hot Coffee',
            subtitle: 'lorem ipsum dolor sit amet, consectoter adipiscing elite'
        },
        {
            id:3,
            image: Coffee1,
            title: 'Cold Coffee',
            subtitle: 'lorem ipsum dolor sit amet, consectoter adipiscing elite'
        }
    ]
  return (
    <div className='container my-16 space-y-4' >
        {/* header section */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1 initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}} transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                    delay: 0.2
                }}
                className='text-3xl font-bold text-lightGray' >
                Fresh and <span className='text-primary'>Tasty</span>
            </motion.h1>
            <motion.p initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}} transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                    delay: 0.6
                }} className='text-sm opacity-50'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laboriosam numquam modi corrupti laborum id ea odit dolorem adipisci nam, 
                dicta molestiae aspernatur dolor amet quasi eos vel delectus commodi quo.
            </motion.p>
        </div>
        {/* card section */}
        <motion.div variants={conatainerVariant} 
            initial='hidden'
            whileInView={'visible'} 
            viewport={{amount: 0.5}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {serviceData.map((service) => (
                <motion.div variants={cardVariants} key={service.id} className='text-center p-4 space-y-6'>
                    <div className='space-y-5'>
                        <img src={service.image} alt='coffee-img' className='img-shadow2 max-w-[200px] mx-auto 
                            hover:scale-105 duration-300 cursor-pointer' />
                        <h1 className='text-2xl font-bold text-primary'>
                            {service.title}
                        </h1>
                        <p className='text-darkGray'>
                            {service.subtitle}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Service