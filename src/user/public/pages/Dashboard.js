import React from 'react'
import Logo from '../../../assets/logo2.png'
import Loc from '../../../assets/loc.png'
import Profil from '../../../assets/profile.png'
import Logo3 from '../../../assets/logo3.png'
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleUrgent = () => {
        navigate("/urgentklik");
      };
      const handleHelps = () => {
        navigate("/helpklik");
      };
      const handleInfo = () => {
        navigate("/infoklik");
      };
      const handlesakri = () => {
        navigate("/sakriklik");
      };
      const handlemap = () => {
        navigate("/mapklik");
      };
      const handlenews = () => {
        navigate("/newsklik");
      };
  return (
    <div className='deflayout'>
        <div className='headlayout'>
            <div><img src={Logo} /></div>
            <div className='rowlay'>
                <img className='iconloc' src={Loc} />
                <div className='textdefault'>Purwokerto, Banyumas</div>
                </div>
            <div><img src={Profil} /></div>
        </div>
        <div className='secondRow'>
            <div className='HeadText'>Selamat Datang (Nama User)</div>
    
        </div>

        <div className='thirdRow'>
            <div className='row1'>
                <img src={Logo3} />
            </div>
            <div className='contentbid' >
                <div className='content' onClick={handleUrgent}>
                    URGENT KLIK
                </div>
                <div className='content-a' onClick={handleHelps}>
                    HELP KLIK
                </div>
            </div>
            <div className='contentbid' >
                <div className='content-b' onClick={handleInfo}>
                    INFO KLIK
                </div>
                <div className='content-c' onClick={handlesakri}>
                    SAKRI KLIK
                </div>
            </div>
            <div className='contentbid' >
                <div className='content-d' onClick={handlemap}>
                    MAP KLIK
                </div>
                <div className='content-e' onClick={handlenews}>
                    NEWS KLIK
                </div>
            </div>
        </div>
        <div className='botrow'>
            Polres Banyumas 0281622259/112<br />
            Polwil Banyumas Jl. Jend. Gatot Subroto 79. Tlp: 0281643666
        </div>
    </div>
  )
}

export default Dashboard