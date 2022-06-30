import React from 'react'
import Csidebar from '../shared/components/sidebar/Csidebar'
import Cards from '../shared/components/Cards'
import Inputform from '../shared/components/Inputform'
function Homepage() {
  return (
    <div>
      <div class="flex">
      <div class="mr-2"><Csidebar/></div>

      <div class=" ml-4 mt-4">
          <div className=' flex justify-between border-b-2'>
            <div>            
              <h3>Course (34)</h3>
              <p>Learn more about setting up course</p>
            </div>
            <div>
            <button class="border-2 mr-16 bg-white-300 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">+ Create course</button>
            </div>
          </div>

          <div className='mt-6 mr-4'>
            <div><Inputform/></div>
            <div className='flex space-x-6'> 
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
              </div>
              
              <div className='flex space-x-6 mt-4'> 
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
              </div>        
          </div>

      </div>
    </div>
    </div>
  )
}

export default Homepage
