import { useDispatch } from 'react-redux';
import cloud from '../../assets/cloud.svg';
import { setSelectedCityWeather } from '../../redux/state/weatherSlice';
import { useState } from 'react';



function NoState() {
  const [buttonText, setButtonText] = useState("Search by my location");

  const dispatch = useDispatch();

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
            setButtonText("Not supported")
            reject(new Error('Error occurred while fetching location'));
          }
        );
      } else {
        setButtonText("Not supported")
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }

  async function fetchData() {
    setButtonText("Loading...");
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
        setButtonText("Couldn't find city")
        throw new Error('Error: Couldnt find city.');
      }

      const json = await response.json();
      dispatch(setSelectedCityWeather(json));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        setButtonText("Not supported")
      } else {
        console.error('Unknown error occurred.');
        setButtonText("Not supported")
      }
    }
  }

  return (
    <div className="no-state full-width">
      <img src={cloud} alt="" />
      <h2>No city selected</h2>
      <p>Start typing a city name to view the weather forecast.</p>
      <button onClick={fetchData}>{buttonText}</button>  
    </div>
  );
}

export default NoState;
