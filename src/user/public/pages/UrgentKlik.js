import React from 'react'
import Back from '../../../assets/Vector.png'
import Profile from '../../../assets/profile.png'
import Alarm from '../../../assets/alarm.png'
import { useNavigate } from "react-router-dom";

function UrgentKlik() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/dashboard");
  };

    const handleFileInputChange = (event) => {
        const fileInput = event.target;
        if (fileInput.files && fileInput.files[0]) {
          const file = fileInput.files[0];
          // Perform any necessary actions with the selected file
          console.log('Selected file:', file);
        }
    }
  return (
    <div className='deflayout-a'>
        <div className='headlayout-b'>
            <div className='biddeffault'>
                <img onClick={handleHome} className='icontdef' src={Back} />
                <div className='defaulttext1'>
                    URGENT KLIK
                </div>
                
            </div>
            <div>
                    <img className='icontdef' src={Profile} />
                </div>
        </div>
        <div className='body'>
            <div className='circle-b rounded-circle'>
                <div className='urgent'>URGENT</div>
            </div>
            <label className='inputfiles' htmlFor='fileInput'>Foto/Video</label>
            <input id='fileInput'
          type='file'
          accept='image/*,video/*'
          capture='camera'
          onChange={handleFileInputChange} className='inputhidden' placeholder='Foto/Video'/>
          <div className='sendbutton'>Kirim</div>
        </div>

        
        </div>
  )
}

export default UrgentKlik