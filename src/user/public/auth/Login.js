import React, { useContext, useState } from 'react'
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { Usercontext } from '../../../context/UserContext';
import { useMutation } from 'react-query';
import { API, APILOKAL } from '../../../config/api';

function Login() {

  const Navigate = useNavigate();
  const [state, dispatch] = useContext(Usercontext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const [denied, setDenied] = useState(false);

  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body

      // Configuration
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const Body = JSON.stringify(form);

      // Insert data for login process
      const response = await APILOKAL.post("/login", Body, config);

      console.log(response.data);

      // Checking process
      if (response?.data.status == "success") {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        // Status check
        if (response.data.data.role == "admin") {
          setDenied(false)
          Navigate("/");
        } else {
          setDenied(true)
        }
      }
    } catch (error) {
      setDenied(true)
      console.log(error);
    }
  });
  console.log(state);

  return (
        <div className="authparent">
        <div className="authchild2">
          <h2 className="textheader">LOGIN</h2>
          <div className={`${denied ? "denied" : "off"}`}>Permission Denied</div>
          <form onSubmit={(e) => handleSubmit.mutate(e)}>
          
          <div className="loginauth">
            <div>
              <input id="username"
            placeholder="username"
            name="username"
            value={username}
            onChange={handleChange} className="inputpers" 
             />
            </div>
            <div>
              <input type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange} className="inputpers" />
            </div>
            <div className="defaulttext">Belum punya akun ? <a onClick={handleLogin}>Daftar disini</a></div>
          </div>
          <div className="buttonauthparent">
            <button type="submit" className="buttonauth">Login</button>
          </div>
          </form>
        </div>
      </div>
    
  )
}

export default Login