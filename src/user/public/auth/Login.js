import React, { useContext, useState } from 'react'
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { Usercontext } from '../../../context/UserContext';

function Login() {
  const [state, dispatch] = useContext(Usercontext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/dashboard");
  };
  const handleLogin = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='register'>
        <div className="authparent">
        
        <div className="authchild2">
          <h2 className="textheader">LOGIN</h2>
          <form>
          <div className="loginauth">
            <div>
              <input id="username"
            placeholder="username"
            name="username"
            value={username}
            onChange={handleChange} className="authinput" 
            placeholder="User ID" />
            </div>
            <div>
              <input type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange} className="authinput" placeholder="Password" />
            </div>
            <div className="defaulttext">Belum punya akun ? <a onClick={handleLogin}>Daftar disini</a></div>
          </div>
          <div className="buttonauthparent">
            <button onClick={handleHome} className="buttonauth">Login</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login