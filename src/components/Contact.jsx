import React from 'react'

const Contact = () => {
  return (
    <div className='transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-2 m-2 border-[#263039]'>
      <div>
        <section className='p-5 text-2xl md:text-3xl font-bold'>Contact</section>
      </div>
      <div className='m-2 p-2 md:p-5 flex flex-col md:flex-row gap-6'>
        <section className='p-2 md:p-3 md:m-5 w-full md:w-1/2'>
          <p className='text-[#8992A0]'>Have a project in mind, or just want to talk stacks? My inbox is open.</p>
          <ul className='pt-5 list-disc pl-5 flex flex-col gap-4 break-words'>
            <li><a href="mailto:hkonval900@gmail.com">Email: hkonval900@gmail.com</a></li>
            <li><a href="tel:+923204992627">Phone: 0320-4992627</a></li>
            <li><a href="https://www.linkedin.com/in/hiba-arshad-4770253a1" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.fiverr.com/s/P42ek1w" target='_blank' rel="noopener noreferrer">Contact me at FIVERR</a></li>
          </ul>
        </section>
        <section className='p-3 md:m-5 w-full md:w-1/2 border border-[#263039] rounded-xl'>
          <form className='flex flex-col gap-4'>
            <label htmlFor="name" className='text-[#8992A0]'>Name</label>
            <input type="text" placeholder='Name' className='border hover:border-teal-400 hover:text-[#F2C14E] bg-[#1C242D] border-[#263039] p-2 rounded-xl w-full'/>
            <label htmlFor="email" className='text-[#8992A0]'>Email</label>
            <input type="email" placeholder='Email' className='border hover:border-teal-400 hover:text-[#F2C14E] bg-[#1C242D] border-[#263039] p-2 rounded-xl w-full'/>
            <label htmlFor="message" className='text-[#8992A0]'>Message</label>
            <textarea id="message" placeholder='Message' className='border hover:border-teal-400 hover:text-[#F2C14E] bg-[#1C242D] border-[#263039] p-2 rounded-xl w-full'></textarea>
            <button type="submit" className='bg-[#F2C14E] text-black p-3 w-full md:w-auto md:mx-auto rounded hover:bg-[#e0b03d]'>Send Message</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Contact