import type { WeatherData } from '../../utils/types'

interface Props {
    data: WeatherData,
    style?: string
}

// Background colors based on weather
const backgroundColors: Record<string, string>= {
  'Thunderstorm': '#3b3b58',
  'Drizzle': '#8fa4b8',
  'Rain': '#5c7c99',
  'Snow': '#f0f0f5',
  'Mist': '#d6d6d6',
  'Smoke': '#999999',
  'Haze': '#b7b7b7',
  'Dust': '#d4b483',
  'Fog': '#c0c0c0',
  'Sand': '#e2c290',
  'Ash': '#777777',
  'Squall': '#4a4a6a',
  'Tornado': '#2c2c2c',
  'Clear': '#87ceeb',
  'Clouds': '#b0c4de',
}

function getStyles(boxColor: string) {
  const boxShadowValue = `5px 23px 71px 60px ${boxColor}`;
  return {
    backgroundColor: boxColor,
    boxShadow: boxShadowValue,
    WebkitBoxShadow: boxShadowValue,
    MozBoxShadow: boxShadowValue,
  };
}

function WeatherHeader({data, style}: Props) {
  const weatherMain = data.weather[0].main
  const backgroundColor = backgroundColors[weatherMain] || '#ffffff'
  const styles = getStyles(backgroundColor);

  return (
    <div className={`weather-header ${style ?? ''}`} 
    style={styles}>
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
