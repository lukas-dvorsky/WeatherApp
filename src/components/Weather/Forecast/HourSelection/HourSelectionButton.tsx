import { useDispatch } from 'react-redux'
import { setSelectedListIndex } from '../../../../redux/state/weatherSlice'
import type { WeatherDataList } from '../../../../utils/types'
import { getDayNames } from '../../../../utils/functions'

interface Props {
  list: WeatherDataList
  listIndex: number
}

function HourSelectionButton({list, listIndex}: Props) {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(setSelectedListIndex(listIndex))}>
      {list.dt_txt} {getDayNames(list, listIndex)}
    </button>
  )
}

export default HourSelectionButton
