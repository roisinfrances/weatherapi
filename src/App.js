import React from 'react';
import WeatherCard from './WeatherCard';
import {Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './App.css';

const API_KEY = ["5034f85d28b06aaf0759c655e67ece36"];
const API_BASE_URL = 'http://api.openweathermap.org';


const App = () => { 
  
  const [data, setData] = useState(null)
  // const city = "Sheffield,UK"
  const lat = "53.383"
  const lon = "-1.4659"
  

  useEffect(() => {
    fetch(
      `${API_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []) 



  return (    
    <div className="App">
      <Container>
        <Row>
          <h1>Weather - Sheffield</h1>
      { data && data.daily.slice(0,7).map((day) => <WeatherCard 
        dt={day.dt * 1000}
        temp_min={day.temp.min}
        temp_max={day.temp.max}
        main={day.weather[0].main}
        icon={day.weather[0].icon}
        />)
      }
      </Row>
      </Container>
    </div>
  );
};

export default App;
