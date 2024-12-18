import React from 'react'

const Content = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
      <p className='text-4xl font-bold ' > Courses</p> 
 <p>Manage Your Course List Here</p> 
<button className='bg-gray-800 hover:bg-white hover:text-gray-800 border-2 border-gray-800 text-white p-2 rounded-lg' >Add New Course</button>

      </div>
 <input type="text" placeholder='search...' className='border my-6 border-gray-300 rounded-xl p-2 w-1/3' />

    </div>
  )
}

export default Content