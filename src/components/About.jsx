import React from 'react'

const About = () => {
    return (
        <div className='border-t-2 m-2 p-5 flex flex-col md:flex-row border-[#263039]'>
            <section className='w-full md:w-1/2 md:mr-3'>
                <h1 className='text-2xl md:text-3xl font-bold'>About</h1>
            </section>
            <section className='w-full md:w-1/2 md:ml-8 p-2 md:p-5 text-[#8992A0]'>
                <p className='pt-5'>I'm a full stack developer who likes projects where the frontend, backend, and data layer all have to work together honestly — real-time chat, payments, dashboards, the messy parts most tutorials skip.</p>
                <p className='pt-5'>Comfortable owning a feature from a rough idea to a deployed URL, tests included.</p>
                <ul className='pt-4 list-none flex flex-wrap gap-3 md:gap-4'>
                    <li className='border border-[#263039] p-2 rounded-xl hover:border-teal-400 transition-colors duration-300 text-sm md:text-base'>JavaScript</li>
                    <li className='border border-[#263039] p-2 rounded-xl hover:border-teal-400 transition-colors duration-300 text-sm md:text-base'>React</li>
                    <li className='border border-[#263039] p-2 rounded-xl hover:border-teal-400 transition-colors duration-300 text-sm md:text-base'>Node.js</li>
                    <li className='border border-[#263039] p-2 rounded-xl hover:border-teal-400 transition-colors duration-300 text-sm md:text-base'>Express</li>
                    <li className='border border-[#263039] p-2 rounded-xl hover:border-teal-400 transition-colors duration-300 text-sm md:text-base'>MongoDB</li>
                    <li className='border border-[#263039] p-2 rounded-xl hover:border-teal-400 transition-colors duration-300 text-sm md:text-base'>Docker</li>
                </ul>
            </section>
        </div>
    )
}

export default About