import React from 'react'
import Dashboards from '../assets/dashboard.png'
import Police from '../assets/police.png'
import Service from '../assets/service.png'

function SideBar() {
  return (
    <div className='bar'>
      <div className='icondash'>
        <img className='iconclub' src={Dashboards} />
      </div>
      <div className='icondash'>
        <img className='iconclub' src={Police} />
      </div>
      <div className='icondash'>
        <img className='iconclub' src={Service} />
      </div>

    </div>
  )
}

export default SideBar