import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');

  const apiKey = 'f40b154d0d757972e43739ac7fb2b0b3';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  const handleSearch = async () => {
    try {
      const response = await axios.get(apiUrl + city + `&appid=${apiKey}`);
      const data = response.data;
      setWeatherData((prevData) => [...prevData, data]);
      setError('');
      setCity('');
    } catch (error) {
      setWeatherData([]);
      setError('Invalid city name...try again !');
    }
  };

  const handleDelete = (i) => {
    const updatedWeatherData = [...weatherData];
    updatedWeatherData.splice(i, 1);
    setWeatherData(updatedWeatherData);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img src="src/images/search.png" alt="search" />
        </button>
      </div>

      {error && <div className="error"><p>{error}</p></div>}

      {weatherData.map((data,i) => (
            <div className="card" key={i}>
          <div className="weather">
            <img src="src/images/rain.png" className="weather-icon" alt="Weather Icon" />
            <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
            <h2 className="city">{data.name}</h2>
            <div className="details">
              <div className="col">
                <img src="src/images/humidity.png" alt="Humidity Icon" />
                <div>
                  <p className="humidity">{data.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src="src/images/wind.png" alt="Wind Icon" />
                <div>
                  <p className="wind">{data.wind.speed}km/hr</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
          <button className="button-30" onClick={() => handleDelete(i)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Weather;
