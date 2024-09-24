import React from 'react'
import { motion } from "framer-motion";
import { styles } from '../style';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto 
        ${styles.paddingX} flex items-center gap-2 flex-col lg:flex-row`}>
        <div className='flex flex-col justify-center'>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, <br className='sm:block hidden'/>I'm Krishna Mohan
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#D2E823]`}>
            Frontend developer who writes clean, <br className='sm:block hidden'/> elegant and effective code
          </p>
        </div>
        <div className='flex justify-center md:h-[85%] h-[90%] flex-1 items-end relative'>
          <ComputersCanvas />
        </div>
      </div>
      <div className='absolute inset-0 top-[92%] justify-center items-center
       flex  w-full h-[70px]'>
        <a href="#about">
          <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero