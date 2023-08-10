import React from 'react'
import Back from '../../../assets/Vector.png'
import Profile from '../../../assets/profile.png'
import Alarm from '../../../assets/alarm.png'
import { useNavigate } from "react-router-dom";

function HelpKlik() {
    const navigate = useNavigate();
  const handleHome = () => {
    navigate("/dashboard");
  };
  return (
    <div className='deflayout-a'>
        <div className='headlayout-b'>
            <div className='biddeffault'>
                <img onClick={handleHome} className='icontdef' src={Back} />
                <div className='defaulttext1'>
                    HELP KLIK
                </div>
                
            </div>
            <div>
                    <img className='icontdef' src={Profile} />
                </div>
        </div>
        <div className='body'>
            <div className='circle-a rounded-circle'>
                <img src={Alarm} />
            </div>
        </div>
        </div>
  )
}

export default HelpKlik