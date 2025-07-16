import Whisperer from './components/Whisperer/Whisperer'
import citiesData from './assets/city.list.json'
import type { City } from './utils/types'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCity } from './redux/state/citySlice';
import type { RootState } from './redux/store';
import { setSelectedCityWeather } from './redux/state/weatherSlice';
import WeatherDisplay from './components/Weather/WeatherDisplay';
import NoState from './components/General/NoState';
import Footer from './components/General/Footer';

function App() {
  // Save data as array
  const cities = citiesData as City[];
  const dispatch = useDispatch()

  const selectedCityWeather = useSelector((state: RootState) => state.weather.setSelectedCityWeather)

  async function handleClick(city: City): Promise<void> {
    // api call
    const apiKey = import.meta.env.VITE_API_KEY

    const cityName = city.name;
    const countryCode = city.country;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;
    try {
      if(!apiKey) {throw new Error("API key is missing")}
        
      const response  = await fetch(url);
        if (!response.ok) {
          throw new Error("Error: Couldnt find city.")
        }

        const json = await response.json();
        console.log(json);
        dispatch(setSelectedCityWeather(json)); 
    } catch (error: unknown) {
      if(error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error occured.")
      }
    }

    // Save data to store
    dispatch(setSelectedCity(city)); 
  }

  return (
    <>
      <main>
        <Whisperer<City> 
          data={cities}
          styles='header'
          searchBy={city => city.name}
          display={city => city.name}
          displaySecond={city => city.country}
          itemKey={city => city.id}
          placeholder='Search for city...'
          onClick={handleClick}
        />

        {selectedCityWeather ?
        <WeatherDisplay data={selectedCityWeather}/> :
        <NoState />}

      </main>
      <Footer texts={['Created by Lukas Dvorsky.']}/>
    </>
  )
}

export default App
