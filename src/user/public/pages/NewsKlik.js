import React from 'react'
import Back from "../../../assets/Vector.png";
import Profile from "../../../assets/profile.png";
import Sambo from '../../../assets/sambo.png'
import Rampok from '../../../assets/rampok.png'
import Tawuran from '../../../assets/tawuran.png'
import Tewas from '../../../assets/tewas.png';
import { useNavigate } from "react-router-dom";

function NewsKlik() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/dashboard");
  };
  return (
    <div className="deflayout-a">
      <div className="headlayout-e">
        <div className="biddeffault">
          <img className="icontdef" src={Back} onClick={handleHome}/>
          <div className="defaulttext1">NEWS KLIK</div>
        </div>
        <div>
          <img className="icontdef" src={Profile} />
        </div>
      </div>
      <div className="bodysakri">
        <div className="newsbid">
          <img src={Sambo} />
          <div>
        Hukuman Mati Ferdy Sambo 
Didiskon Jadi Seumur Hidup, 
Warganet Singgung Promo 8.8 
dan Voucer Diskon Pidana
        </div>
        </div>

        <div className="newsbid">
          <img src={Rampok} />
          <div>
          Perampok Nasabah Bank 
Ditangkap, Ini Kronologi 
Penangkapan dan Peran 
Pelaku » DIALEKSIS :: Dialetika 
dan....
        </div>
        </div>

        <div className="newsbid">
          <img src={Tawuran} />
          <div>
          PKecenderungan Tawuran 
Antar Pelajar
        </div>
        </div>

        <div className="newsbid">
          <img src={Tewas} />
          <div>
          Satu tewas, tiga luka-luka 
dalam kecelakaan beruntun 
di Purwokerto
        </div>
        </div>
        
      
       
      </div>
    </div>
  )
}

export default NewsKlik