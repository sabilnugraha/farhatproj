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
import { setAuthToken } from './config/api';
import Layout from './layout/Layout';

function App() {
  const [state, dispatch] = useContext(Usercontext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Redirect Auth
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

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

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
