import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Content = () => {

  

  return (
    <div>
      <Navbar/>
      <div className="flex justify-between items-center p-2">
        <div>
        <p className='text-4xl font-bold ' > Courses</p> 
 <p>Manage Your Course List Here</p> 

        </div>
<Link to='/create' className="bg-gray-700 my-2 hover:bg-white hover:text-gray-700 font-bold border-2 border-gray-700 text-white p-2 rounded-lg"
 >Add New Course</Link>

      </div>
 <input type="text" placeholder='search...' className='border my-6 border-gray-400 rounded-xl p-2 w-1/3' />

{/* data */}

    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-black ">
        <thead className="text-xs text-black uppercase  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Course Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Payable Price
            </th>
            <th scope="col" className="px-6 py-3">
              Discount Status
            </th>
            <th scope="col" className="px-6 py-3">
              Discount Value
            </th> 
            <th scope="col" className="px-6 py-3">
              Private Status
            </th>
            <th scope="col" className="px-6 py-3">
              IsFree?
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-white dark:border-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-black"
            >
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b dark:bg-white dark:border-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-black"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white dark:bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-black"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Content