import React from 'react'
import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import Rightbar from './Rightbar'

const Timeline = () => {
  return (
    <>
    <div className='timeline-container-content'>
        <div className='timeline-container'>
            <div className='timeline'>
                <Sidebar/>
            </div>
            <div className='timeline2'>
                <Middlebar/>
            </div>
            <div className='timeline3'>
                <Rightbar/>
            </div>

        </div>

    </div>
    </>
  )
}

export default Timeline