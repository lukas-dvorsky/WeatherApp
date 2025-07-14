import type { WeatherData } from '../../utils/types'

interface Props {
    data: WeatherData,
    style?: string
}

function WeatherHeader({data, style}: Props) {
  return (
    <div className={`weather-header ${style}`}>
        <span className='city-name'>{data.name}</span>
        <div className='temperature-container'>
          <span>{data.main.temp}°</span>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
          />
        </div>
        <span>{data.weather[0].main}</span>
    </div>
  )
}

export default WeatherHeader
