import { useState } from 'react'
import Whisperer from './components/Whisperer/Whisperer'
import citiesData from '../public/city.list.json'
import type { City } from './utils/types'
function App() {
  // Save data as array
  const cities = citiesData as City[];

  return (
    <>
      <Whisperer<City> 
        data={cities}
        searchBy={city => city.name}
        limit={5}
        placeholder=''
        />
    </>
  )
}

export default App
