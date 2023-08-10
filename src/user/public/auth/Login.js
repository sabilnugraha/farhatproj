import React from 'react'
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/dashboard");
  };
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className='register'>
        <div className="authparent">
        <div className="authchild1">
          <img src={Logo} />
        </div>
        <div className="authchild2">
          <h2 className="textheader">LOGIN</h2>
          <div className="loginauth">
            <div>
              <input className="authinput" placeholder="User ID" />
            </div>
            <div>
              <input type="password" className="authinput" placeholder="Password" />
            </div>
            <div className="defaulttext">Belum punya akun ? <a onClick={handleLogin}>Daftar disini</a></div>
          </div>
          <div className="buttonauthparent">
            <button onClick={handleHome} className="buttonauth">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login