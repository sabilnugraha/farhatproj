import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
import SideBar from '../../../componen/SideBar';

function Dashboard() {
    const navigate = useNavigate();
    
    

      const [excelFile, setExcelFile] = useState(null);
      const convertAndLog = () => {
        if (excelFile) {
            const reader = new FileReader();
      
            reader.onload = (e) => {
              const data = e.target.result;
              const workbook = XLSX.read(data, { type: 'binary' });
              const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
              
              // Display the JSON data in the console
              console.log(jsonData);
            };
      
    
          reader.readAsBinaryString(excelFile);
        } else {
          console.log("Please choose a valid Excel file.");
        }
      };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setExcelFile(file);
  };
  return (
    <div className='deflayout'>
        <SideBar />
        <div>
            <form>
            <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
        <button type="button" onClick={convertAndLog}>Convert to JSON</button>
            </form>
        </div>
        {/* <div className='headlayout'>
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
        </div> */}
    </div>
  )
}

export default Dashboard