import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from './user/public/auth/Register';
import Login from './user/public/auth/Login';
import Dashboard from './user/public/pages/Dashboard';
import HelpKlik from './user/public/pages/HelpKlik';
import UrgentKlik from './user/public/pages/UrgentKlik';
import SakriKlik from './user/public/pages/SakriKlik';
import InfoKlik from './user/public/pages/InfoKlik';
import NewsKlik from './user/public/pages/NewsKlik';
import MapKlik from './user/public/pages/MapKlik';
import LoginAdmin from './user/police/LoginAdmin';
import { useContext, useEffect } from 'react';
import { Usercontext } from './context/UserContext';
import { APILOKAL, setAuthToken } from './config/api';
import Layout from './layout/Layout';

function App() {
  const [state, dispatch] = useContext(Usercontext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect Auth
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }}, [state]);
  //   if (state.isLogin == false) {
  //     navigate("/");
  //   } else {
  //     if (state.user.status == "admin") {
  //       navigate("/admin");
  //       // history.push("/complain-admin");
  //     } else if (state.user.status == "customer") {
  //       navigate("/");
  //     }
  //   }
  // }, [state]);
  const checkUser = async () => {
    try {
      const response = await APILOKAL.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      console.log(payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  console.log(state);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
