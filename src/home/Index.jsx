import React from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import Navbar from '../components/Navbar'

const Index = () => {
  return (
    <>
    <div className="flex h-screen bg-gray-100">
    

      {/* Main Content Area */}
    
      <div className="flex flex-col flex-1 overflow-y-auto">
        
        {/* Content Section */}
        <div className="p-6">
          <Content />
        </div>
      </div>
    </div>
    </>
  )
}

export default Index