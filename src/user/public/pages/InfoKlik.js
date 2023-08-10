import React from "react";
import Back from "../../../assets/Vector.png";
import Profile from "../../../assets/profile.png";
import { useNavigate } from "react-router-dom";

function InfoKlik() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/dashboard");
  };
  return (
    <div className="deflayout-a">
      <div className="headlayout-d">
        <div className="biddeffault">
          <img className="icontdef" src={Back} onClick={handleHome} />
          <div className="defaulttext1">INFO KLIK</div>
        </div>
        <div>
          <img className="icontdef" src={Profile} />
        </div>
      </div>
      <div className="bodysakri">
        <div className="infobid">
          <div className="infocont">Formulir Permohonan Informasi</div>
          <div className="infocont">Layanan Pembuatan SIM</div>
        </div>
        <div className="infobid">
          <div className="infocont">Pelayanan SKCK Online</div>
          <div className="infocont">Pelayanan BINMAS</div>
        </div>
        <div className="infobid">
          <div className="infocont">Pelayanan Tes SIM Online</div>
          <div className="infocont">Pelayanan Samsat Digital</div>
        </div>
        <div className="infobid">
          <div className="infocont">Rintangan Baru dalam Ujian SIM</div>
          <div className="infocont">Kini pengaduan ke Polisi makin gampang</div>
        </div>
      </div>
    </div>
  );
}

export default InfoKlik;
