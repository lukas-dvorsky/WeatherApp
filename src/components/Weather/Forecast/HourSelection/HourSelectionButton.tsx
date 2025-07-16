import { useDispatch } from 'react-redux'
import { setSelectedListIndex } from '../../../../redux/state/weatherSlice'
import type { WeatherDataList } from '../../../../utils/types'
import { getDayNames } from '../../../../utils/functions'

interface Props {
  list: WeatherDataList
  listIndex: number
  buttonIndex: number
  selected?: boolean
  setSelected?: React.Dispatch<React.SetStateAction<number>>
}

function HourSelectionButton({list, listIndex, buttonIndex, selected = false, setSelected}: Props) {
  const dispatch = useDispatch()

  function handleClick() {
      dispatch(setSelectedListIndex(listIndex))
      setSelected !== undefined && setSelected(buttonIndex)
  }

  return (
    <button className={`${selected ? 'selected' : ''}`} onClick={() => handleClick()}>
      <p className='day'>{getDayNames(list, listIndex)}</p>
      <img src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
        alt={list.weather[0].icon}
      />
      <p className='temp'>{list.main.temp}°</p>
      <p className='time'>{list.dt_txt.split(' ')[1].slice(0,5)}</p>
    </button>
  )
}

export default HourSelectionButton
