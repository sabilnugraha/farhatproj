import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Route, Routes } from 'react-router-dom';
import Register from './user/public/auth/Register';
import Login from './user/public/auth/Login';
import Dashboard from './user/public/pages/Dashboard';
import HelpKlik from './user/public/pages/HelpKlik';
import UrgentKlik from './user/public/pages/UrgentKlik';
import SakriKlik from './user/public/pages/SakriKlik';
import InfoKlik from './user/public/pages/InfoKlik';
import NewsKlik from './user/public/pages/NewsKlik';
import MapKlik from './user/public/pages/MapKlik';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/helpklik" element={<HelpKlik />} />
      <Route path="/urgentklik" element={<UrgentKlik />} />
      <Route path="/sakriklik" element={<SakriKlik />} />
      <Route path="/infoklik" element={<InfoKlik />} />
      <Route path="/newsklik" element={<NewsKlik />} />
      <Route path="/mapklik" element={<MapKlik />} />
      </Routes>
    </div>
  );
}

export default App;
