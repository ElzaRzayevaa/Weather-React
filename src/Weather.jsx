import React, { useState } from 'react'
import axios from 'axios';

 const Weather = () => {
const [weather, setWeather] = useState([])
const [city, setCity] = useState('')



 async function changeWeather() {
    const response =  await axios.get(`https://freetestapi.com/api/v1/weathers?city=${city}`)
    const weatherData = response.data.map((item) => ({
      city: item.city,
      temperature: item.temperature,
      weather_description: item.weather_description
    }))
    const filteredWeather = weatherData.filter(item => item.city.toLowerCase() == city.toLowerCase());
    setWeather(filteredWeather)
    
  }

  return (
    <div className='container'>
      <div className='secondCont'>
      
        <h1>Weather App</h1>
        <input className='inputPart' type="text" placeholder='Enter a city' value={city} onChange={(e) => setCity(e.target.value)}/> <br />
        <button className='searchBtn' onClick={() => { changeWeather();
      setCity("")}} > Search </button>
        
        <p>
        {weather.length > 0 && (
          weather.map((item, index) => (
            <div className='paragraph' key={index}>
              <div className='cityName' > {item.city}<br /></div> 
              {item.temperature}&deg;C <br />
             <div className='temp'>{item.weather_description} </div><br />
            </div>
          ))
        )}
      </p>
        
      </div>
       

    </div>
  )
}

export default Weather