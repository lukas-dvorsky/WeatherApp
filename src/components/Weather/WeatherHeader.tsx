import type { WeatherData } from '../../utils/types'

interface Props {
    data: WeatherData,
    style?: string
}

function WeatherHeader({data, style}: Props) {
  const weatherMain = data.weather[0].main
  const weatherClass = weatherMain ? weatherMain.toLowerCase() : 'clear';

  return (
    <div className={`weather-header ${style ?? ''} ${weatherClass}`} >
        <span className='city-name'>{data.name}</span>
        <div className='temperature-container'>
          <p>{data.main.temp}°</p>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
          />
        </div>
        <span>{data.weather[0].main}</span>
    </div>
  )
}

export default WeatherHeader
