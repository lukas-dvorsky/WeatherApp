import Whisperer from './components/Whisperer/Whisperer'
import citiesData from './assets/city.list.json'
import type { City } from './utils/types'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCity } from './redux/state/citySlice';
import type { RootState } from './redux/store';
import { setSelectedCityWeather } from './redux/state/weatherSlice';

function App() {
  // Save data as array
  const cities = citiesData as City[];
  const dispatch = useDispatch()

  const selectedCity = useSelector((state: RootState) => state.city.selectedCity)
  const selectedCityWeather = useSelector((state: RootState) => state.weather.setSelectedCityWeather)

  async function handleClick(city: City): Promise<void> {
    // api call
    const apiKey = import.meta.env.VITE_API_KEY

    const cityName = city.name;
    const countryCode = city.country;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}`;

    try {
      if(!apiKey) {throw new Error("API key is missing")}
        
      const response  = await fetch(url);
        if (!response.ok) {
          throw new Error("Error: Couldnt find city.")
        }

        const json = await response.json();
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

  console.log("Pocasi tady: ", selectedCityWeather);

  return (
    <>
      <Whisperer<City> 
        data={cities}
        searchBy={city => city.name}
        display={city => city.name}
        displaySecond={city => city.country}
        itemKey={city => city.id}
        placeholder='Search for city...'
        onClick={handleClick}
        />
    </>
  )
}

export default App
