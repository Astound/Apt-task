import React from 'react'
import  './Courses.css'
import { Link } from 'react-router-dom'
import Navbar from '../../shared/components/Navbar'
import Courseform from './Courseform'

function Courses() {
  return (
    <div>
      <div className='courselayout '>
        <div className='coursesidebar bg-yellow-50'>
          <Link to="/"> -- Back to Home pages</Link>
        </div>

        <div className='coursemid'>
          <Navbar/>
          <div>
            <Courseform/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Courses
