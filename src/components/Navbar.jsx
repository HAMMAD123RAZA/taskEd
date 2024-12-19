import React from 'react'
import { FaPlus, FaRegBell } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-700 p-5 flex justify-end ' >
    <div className="flex gap-6 items-center ">

    <div>
      <Link to="/create" className="flex gap-2 items-center">
        <FaPlus color="white" />
        <div className="text-white">Create Course</div>
      </ Link>
    </div>
    <FaRegBell color='white'/>
<img
              style={{ borderRadius: '50%', width: 30, height: 30 }}
              className="rounded-full my-3"
              src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMHBjfGVufDB8fDB8fHww
"
              alt="image"
            />
</div>
</div>
)
}

export default Navbar