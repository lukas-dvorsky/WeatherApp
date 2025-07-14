import type { WeatherSectionProps } from '../../utils/types'

function WeatherSection({title, items}: WeatherSectionProps) {
  return (
    <div className='grid-item'>
        {title && <h3>{title}</h3>}
        {items.map((item)=>{
            return <p>{item.desc}: {item.value ?? '-'} {item.unit ?? ''}</p>
        })}
    </div>
  )
}

export default WeatherSection
