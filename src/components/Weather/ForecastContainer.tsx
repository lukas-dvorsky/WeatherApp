import type { WeatherDataList } from '../../utils/types'
import ForecastBox from './ForecastBox'

interface Props {
    lists: WeatherDataList[]
    limit: number
}

function ForecastContainer({lists, limit}: Props) {
    const slicedLists = lists.slice(0, limit);

    return (
        <section>
        {slicedLists.map((list, index) => {
            return <ForecastBox key={index} data={list} listIndex={index}/>
        })}
        </section>
    )
}

export default ForecastContainer
