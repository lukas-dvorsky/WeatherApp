import { useDispatch } from 'react-redux';
import cloud from '../../assets/cloud.svg';
import { setSelectedCityWeather } from '../../redux/state/weatherSlice';
import { useState } from 'react';

function getUserLocation() {
  return new Promise<{ lat: number | null, lon: number | null }>((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve({ lat, lon });
        },
        (error) => {
          reject(new Error('Error occurred while fetching location'));
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}

function NoState() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function fetchData() {
    setIsLoading(true)
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      const { lat, lon } = await getUserLocation();

      if (lat === null || lon === null) return;

      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      if (!apiKey) {
        throw new Error('API key is missing');
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error: Couldnt find city.');
      }

      const json = await response.json();
      dispatch(setSelectedCityWeather(json));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unknown error occurred.');
      }
    }
    setIsLoading(false);
  }

  return (
    <div className="no-state full-width">
      <img src={cloud} alt="" />
      <h2>No city selected</h2>
      <p>Start typing a city name to view the weather forecast.</p>
      {isLoading ?
        <p>Loading...</p> :
        <button onClick={fetchData}>Search by my location</button>  
      }
    </div>
  );
}

export default NoState;
