import React from "react";
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
  const handleHome = () => {
    navigate("/dashboard");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register">
      <div className="authparent">
        <div className="authchild1">
          <img src={Logo} />
        </div>
        <div className="authchild2">
          <h2 className="textheader">REGISTRASI</h2>
          <div className="inputsauth">
            <div>
              <input className="authinput" placeholder="User ID" />
            </div>
            <div>
              <input className="authinput" placeholder="Email" />
            </div>
            <div>
              <input className="authinput" placeholder="Nomor HP" />
            </div>
            <div>
              <input type="password" className="authinput" placeholder="Password" />
            </div>
            <div>
              <input className="authinput" placeholder="Konfirmasi Password" />
            </div>
            <div className="defaulttext">Sudah punya akun ? <a onClick={handleLogin}>Login disini</a></div>
          </div>
          <div className="buttonauthparent">
            <button onClick={handleHome} className="buttonauth">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
