import React from 'react'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { IoPeopleCircleOutline } from 'react-icons/io5'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { AiTwotoneDollar } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { IoMdVideocam } from 'react-icons/io'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaPlus } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex flex-col flex-1 px-2 py-4 gap-10">
          <div className="mx-12 my-3">
            <div className="py-2">
              <img
                width={130}
                src="https://articles.geekster.in/wp-content/uploads/2024/06/Introduction-To-HTML.jpg"
                alt="image"
              />
            </div>
            <div className="mx-3">
              <img
                style={{ borderRadius: '50%', width: 90, height: 90 }}
                className="rounded-full my-3"
                src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMHBjfGVufDB8fDB8fHww"
                alt="profile"
              />
              <p className="font-sans font-bold">Raheel Wali</p>
            </div>
          </div>
          <div className="flex  justify-between items-center  bg-gray-800 text-white border border-gray-700 rounded-lg  py-2 mx-3">
                <div className="flex-1 text-center">
                  <p className="font-bold text-sm">31</p>
                  <p className="text-xs">Course</p>
                </div>

                <div className="h-10 w-px bg-gray-600"></div>

                <div className="flex-1 text-center">
                  <p className="font-bold text-sm">Joined At</p>
                  <p className="text-xs">Jan 8, 2024</p>
                </div>
              </div>

          {/* Other sections */}
          <div className="flex flex-col flex-1 gap-3 ml-2">
            <div className="flex gap-2 items-center">
              <MdOutlineDashboardCustomize size={22} />
              <a href="#" className="text-white my-3 nav-item">
                Dashboard
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <IoPeopleCircleOutline size={22} />
              <Link to='/' className="text-white my-3 nav-item">
                Courses
              </Link>
            </div>
            <div className="flex gap-2 items-center">
                <MdOutlinePeopleAlt size={22} color="white" />

                <a href="#" className=" text-white my-3 nav-item">
                  Profile
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <AiTwotoneDollar size={22} color="white" />

                <a href="#" className=" text-white my-3 nav-item">
                  Earning
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <IoIosContact size={22} color="white" />

                <a href="#" className=" text-white my-3 nav-item">
                  Contacts
                </a>
              </div>


            {/* Add more menu items here */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
