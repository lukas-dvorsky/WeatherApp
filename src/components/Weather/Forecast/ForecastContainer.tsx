import { useSelector } from 'react-redux';
import type { WeatherDataList } from '../../../utils/types'
import ForecastBox from './ForecastBox';
import type { RootState } from '../../../redux/store';

interface Props {
    lists: WeatherDataList[]
    limit: number
}

function ForecastContainer({lists, limit}: Props) {

    const selectedWeatherIndex = useSelector((state: RootState) => state.weather.setSelectedListIndex)

    const slicedLists = lists.slice(selectedWeatherIndex, selectedWeatherIndex + limit);

    return (
        <section>
            {slicedLists.map((list, index) => {
                return <ForecastBox key={index} list={list} listIndex={index} />
            })}
        </section>
    )
}

export default ForecastContainer
