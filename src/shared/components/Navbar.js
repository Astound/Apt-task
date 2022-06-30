import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='flex justify-between font-sans p-2'>
        <div>
            <h3 className='  '> Test Course</h3>
            <p>Learn more about adding content to course</p>
        </div>

        <div>
            <div>
                <button className='mr-2 bg-violet-300 p-1'> Publish course</button>
                <button className='mr-2 bg-slate-200 p-1'> Save</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
