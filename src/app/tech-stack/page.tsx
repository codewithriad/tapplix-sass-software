'use client'


import Hero from '@/components/tech-stack/Hero'
import TechCards from '@/components/tech-stack/TechCards'



const page = () => {
  
  return (
    <>
    <section className='bg-white dark:bg-gray-900'>
      <Hero/>
      <TechCards />
    </section>
    </>
  )
}

export default page