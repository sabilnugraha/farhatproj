import React from 'react'
import Back from '../../../assets/Vector.png'
import Profile from '../../../assets/profile.png'
import Alarm from '../../../assets/alarm.png'
import { useNavigate } from "react-router-dom";


function SakriKlik() {
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
        <div className='headlayout-c'>
            <div className='biddeffault'>
                <img className='icontdef' src={Back} onClick={handleHome}/>
                <div className='defaulttext1'>
                    SAKRI KLIK
                </div>
                
            </div>
            <div>
                    <img className='icontdef' src={Profile} />
                </div>
        </div>
        <div className='bodysakri'>
            <div className='sakriinput'>
            <label className='labelsaran'>Saran</label>
            <textarea className='textsaran'></textarea>
            </div>
            <div className='sakriinput'>
            <label className='labelsaran'>Kritik</label>
            <textarea className='textsaran'></textarea>
            </div>
            <div className='deflayout-c'>
            <label className='inputfiles-a' htmlFor='fileInput'>Foto/Video</label>
            <input id='fileInput'
          type='file'
          accept='image/*,video/*'
          capture='camera'
          onChange={handleFileInputChange} className='inputhidden' placeholder='Foto/Video'/>
          <div className='sendbutton-a'>Kirim</div>
          </div>
        </div>
        </div>
  )
}

export default SakriKlik