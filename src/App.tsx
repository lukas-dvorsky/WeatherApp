import { useState } from 'react'
import Whisperer from './components/Whisperer/Whisperer'
import citiesData from '../public/city.list.json'
import type { City } from './utils/types'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCity } from './redux/state/citySlice';
import type { RootState } from './redux/store';

function App() {
  // Save data as array
  const cities = citiesData as City[];
  const dispatch = useDispatch()

  const selectedCity = useSelector((state: RootState) => state.city.selectedCity)

  function handleClick(city: City) {
    dispatch(setSelectedCity(city));
  }

  console.log(selectedCity)

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
