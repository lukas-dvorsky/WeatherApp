import { useSelector } from 'react-redux';
import type { WeatherData } from '../../utils/types'
import ForecastContainer from './ForecastContainer';
import WeatherHeader from './WeatherHeader'
import WeatherSection from './WeatherSection';
import { createWeatherSections } from './sections'
import type { RootState } from '../../redux/store';

interface Props {
    data: WeatherData
}

// Displays informations about weather based on selected city
function WeatherDisplay({data}:Props) { 

  const selectedWeatherIndex = useSelector((state: RootState) => state.weather.setSelectedListIndex)

  // Shows earliest forecast data
  const sections = createWeatherSections(data, selectedWeatherIndex);


  return (
    <section className='weather-grid'>
      <WeatherHeader data={data} style='full-width' />
      <ForecastContainer lists={data.list} limit={8}/>
      {sections.map((section, index) => {
        return <WeatherSection key={index} title={section.title} items={section.items} style='grid-item' />
      })}
    </section>
  )
}

export default WeatherDisplay
