import React from 'react'
import type { WeatherData } from '../../utils/types'

interface Props {
    data: WeatherData
}

function WeatherDisplay({data}:Props) {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.weather[0].main}</p>
      <p>{data.main.temp}</p>
    </div>
  )
}

export default WeatherDisplay
