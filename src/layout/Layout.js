import React, { useState } from 'react'
import SideBar from '../componen/SideBar'
import Personnel from '../user/police/Personnel'
import Dashboards from '../assets/dashboard.png'
import Police from '../assets/police.png'
import Service from '../assets/service.png'
import Pub from '../user/public/pages/Service'


function Layout() {
  const [police, setPolice] = useState(false)
  const [publics, setPublics] = useState(false)
  const handlePolice = () => {
    
    setPolice(true)
    setPublics(false)
};
const handlePublic = () => {
    
  setPolice(false)
  setPublics(true)
};
  return (
    <div className='layout'>
      <div className='bar'>
      <div className='icondash'>
        <img className='iconclub' src={Dashboards}  />
      </div>
      <div className={`${police ? 'icondashOn' : 'icondash'}`}>
        <img className='iconclub' src={Police} onClick={handlePolice}/>
      </div>
      <div className={`${publics ? 'icondashOn' : 'icondash'}`}>
        <img className='iconclub' src={Service} onClick={handlePublic}/>
      </div>

    </div>
    <div className={`${police ? "" : "off"}`}>
      <Personnel />
      </div>
      <div className={`${publics ? "" : "off"}`}>
      <Pub />
      </div>
    </div>
  )
}

export default Layout