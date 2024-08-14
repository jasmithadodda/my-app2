// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const apiKey = 'a23eacc4fe65a760983352850ecf2ef6'; // Replace with your actual API key

  const fetchWeatherData = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleButtonClick = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Select a City</h1>
      <div>
        <input 
          type="text" 
          value={city} 
          onChange={handleInputChange} 
          placeholder="Enter city name" 
        />
        <button onClick={handleButtonClick}>
          Get Weather
        </button>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {weatherData && (
        <div>
          <h2>Weather Data for {city}</h2>
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Weather;
