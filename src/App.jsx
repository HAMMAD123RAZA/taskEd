import React from 'react'
import Index from './home/Index'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Create from './courses/Create'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Index/>

      <Routes>
    <Route path='/create' element={<Create/>} />
      </Routes>
      </BrowserRouter>
       </div>
  )
}

export default App