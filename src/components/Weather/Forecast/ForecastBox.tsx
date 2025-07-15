import { useDispatch } from 'react-redux'
import { setSelectedListIndex } from '../../../redux/state/weatherSlice'
import type { WeatherDataList } from '../../../utils/types'

interface Props {
  list: WeatherDataList
  listIndex: number
}

function ForecastBox({list, listIndex}: Props) {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(setSelectedListIndex(listIndex))}>
      {list.dt_txt}
    </button>
  )
}

export default ForecastBox
