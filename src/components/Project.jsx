import React from 'react'

const Project = () => {
  return (
<div className=' border-t-2 m-2   border-[#263039] ' >
<section className='p-5 text-3xl font-bold '>Projects</section>
      <section className=' flex  gap-3  p-5 text-[#8992A0]'>
       <section className=' w-1/2 flex flex-col gap-4'>
          <div className=' hover:border-teal-400  transform hover:-translate-y-2 hover:shadow-xl transition-colors duration-300  border border-[#263039] p-4 rounded-xl'>
        <h1>01</h1>
        <p className='text-white'>Bakery Project</p>
        <p>A bakery ordering website where customers can browse products, add items to cart, and place orders online.</p>
        <p className='text-[#4FD1C5]'>React · Express · MongoDB · Tailwind CSS</p>
       </div>
        <div className=' hover:border-teal-400  transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300  border border-[#263039] p-4 rounded-xl '>
        <h1>02</h1>
        <p className='text-white'>Spa Website</p>
        <p>A spa booking website letting visitors explore services and schedule appointments with a simple booking flow.</p>
        <p className='text-[#4FD1C5]'>React · Express · MongoDB · Tailwind CSS</p>
       </div>
       </section>
        <section className=' w-1/2 flex flex-col gap-4'>
            <div className=' hover:border-teal-400  transform hover:-translate-y-2 hover:shadow-xl transition-colors duration-300  border border-[#263039] p-4 rounded-xl '>
        <h1>03</h1>
        <p className='text-white'>Travelling Website</p>
        <p >A travel booking platform where users can search destinations, view packages, and read/leave reviews.</p>
        <p className='text-[#4FD1C5]'>React · Express · MongoDB · Tailwind CSS</p>
       </div>
        <div className= ' hover:border-teal-400  hover:shadow-2xl transform hover:-translate-y-2 transition-colors duration-300  border border-[#263039] p-4 rounded-xl '>
        <h1>04</h1>
        <p className='text-white'>Portfolio Website</p>
        <p>A personal portfolio site showcasing projects and skills, built with a clean layout and smooth scroll animations </p>
        <p className='text-[#4FD1C5]'>React · Express · MongoDB · Tailwind CSS</p>
       </div>
        </section>
      </section>

</div>    
  )
}

export default Project