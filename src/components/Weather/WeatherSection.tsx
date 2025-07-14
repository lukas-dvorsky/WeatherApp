import type { WeatherSectionProps } from '../../utils/types'

function WeatherSection({title, items, style}: WeatherSectionProps) {
  return (
    <div className={style}>
        {title && <h3>{title}</h3>}
        {items.map((item)=>{
            return <p><span>{item.desc}:</span> {item.value ?? '-'} {item.unit ?? ''}</p>
        })}
    </div>
  )
}

export default WeatherSection
