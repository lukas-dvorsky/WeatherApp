import { useDispatch } from 'react-redux'
import type { WeatherDataList } from '../../utils/types'
import { setSelectedListIndex } from '../../redux/state/weatherSlice'

interface Props {
    data: WeatherDataList
    listIndex: number
}

function ForecastBox({data, listIndex}: Props) {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(setSelectedListIndex(listIndex))}>
      {data.dt_txt}
    </button>
  )
}

export default ForecastBox
