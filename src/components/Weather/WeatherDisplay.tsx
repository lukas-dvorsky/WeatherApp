import type { WeatherData } from '../../utils/types'
import WeatherHeader from './WeatherHeader'
import WeatherSection from './WeatherSection';
import { createWeatherSections } from './sections'

interface Props {
    data: WeatherData
}

// Displays informations about weather based on selected city
function WeatherDisplay({data}:Props) { 
  const sections = createWeatherSections(data);

  return (
    <section className='weather-grid'>
      <WeatherHeader data={data} style='full-width' />
      {sections.map((section, index) => {
        return <WeatherSection key={index} title={section.title} items={section.items} />
      })}
    </section>
  )
}

export default WeatherDisplay
