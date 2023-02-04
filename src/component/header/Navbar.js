import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='text-white bg-blue-900 flex flex-col md:flex-row p-2 items-center md:justify-between'>
        <div className="leftnav">
            <h2 className='font-bold text-xl'>CodingMasters</h2>
        </div>
        <div className="rightnav  ">
            <ul className='flex justify-between gap-4 text-sm '>
                <li className='cursor-pointer hover:transition hover:translate-y-2' >Home</li>
                <li className='cursor-pointer hover:transition hover:translate-y-2' >Blog</li>
                <li className='cursor-pointer hover:transition hover:translate-y-2' >Courses</li>
                <li className='cursor-pointer hover:transition hover:translate-y-2' >Contact Us</li>
                <button className='cursor-pointer ' >Login/signup</button>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
