import React, { useEffect, useState } from 'react'
import Back from "../../../assets/Vector.png";
import Profile from "../../../assets/profile.png";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function MapKlik() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/dashboard");
      };
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
    const [address, setAddress] = useState('');
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation({ lat: latitude, lng: longitude });
    
              try {
                const response = await axios.get(
                  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
                );
                setAddress(response.data.display_name);
              } catch (error) {
                console.error('Error getting address:', error);
              }
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      }, []);
    
    
  return (
    <div className="deflayout-a">
      <div className="headlayout-f">
        <div className="biddeffault">
          <img onClick={handleHome} className="icontdef" src={Back} />
          <div className="defaulttext1">MAP KLIK</div>
        </div>
        <div>
          <img className="icontdef" src={Profile} />
        </div>
      </div>
      <div className='mapbid'>
      <MapContainer center={userLocation} zoom={15} style={{ height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={userLocation}>
          <Popup>
            <div>
              <strong>Your Location</strong>
              <p>{address}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </div>
  )
}

export default MapKlik