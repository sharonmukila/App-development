import React, { useEffect, useState } from 'react';
import './LocationMap.css'; // Import your CSS file

const LocationMap = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get the user's current location using the Geolocation API
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      });
    }
  }, []);

  return (
    <div className="location-map-container">
      <h2>Current Location</h2>
      <div className="map">
        {userLocation && (
          <iframe
            title="User Location"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}&z=15&output=embed`}
          />
        )}
      </div>
    </div>
  );
};

export default LocationMap;
