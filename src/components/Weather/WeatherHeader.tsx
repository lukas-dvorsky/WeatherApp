import { useSelector } from 'react-redux';
import type { WeatherData } from '../../utils/types'
import type { RootState } from '../../redux/store';

interface Props {
    data: WeatherData,
    style?: string
}

function WeatherHeader({data, style}: Props) {
  const selectedIndex = useSelector((state: RootState) => state.weather.setSelectedListIndex);
  const weatherMain = data.list[selectedIndex].weather[0].main
  const weatherClass = weatherMain ? weatherMain.toLowerCase() : 'clear';


  return (
    <div className={`weather-header ${style ?? ''} ${weatherClass}`} >
        <span className='city-name'>{data.city.name}</span>
        <div className='temperature-container'>
          <p>{data.list[selectedIndex].main.temp}°</p>
        </div>
        <span>{data.list[selectedIndex].weather[0].main}</span>
    </div>
  )
}

export default WeatherHeader
