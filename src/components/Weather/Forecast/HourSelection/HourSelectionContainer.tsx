import { useSelector } from 'react-redux';
import type { WeatherDataList } from '../../../../utils/types'
import HourSelectionButton from './HourSelectionButton';
import type { RootState } from '../../../../redux/store';

interface Props {
    lists: WeatherDataList[]
    limit: number
}

function HourSelectionContainer({lists, limit}: Props) {

    const anchor = useSelector((state: RootState) => state.weather.setAnchorListIndex)

    const slicedLists = lists.slice(anchor, anchor + limit);

    return (
        <section>
            {slicedLists.map((list, index) => {
                return <HourSelectionButton key={index} list={list} listIndex={anchor + index} />
            })}
        </section>
    )
}

export default HourSelectionContainer
