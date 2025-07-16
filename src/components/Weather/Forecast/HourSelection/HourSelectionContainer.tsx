import { useSelector } from 'react-redux';
import type { WeatherDataList } from '../../../../utils/types'
import HourSelectionButton from './HourSelectionButton';
import type { RootState } from '../../../../redux/store';
import { useState } from 'react';

interface Props {
    lists: WeatherDataList[]
    limit: number
    styles?: string
}

function HourSelectionContainer({lists, limit, styles}: Props) {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0)

    const anchor = useSelector((state: RootState) => state.weather.setAnchorListIndex)
    const slicedLists = lists.slice(anchor, anchor + limit);


    return (
        <section className={styles}>
            {slicedLists.map((list, index) => {
                return (
                    <HourSelectionButton 
                        key={index} 
                        list={list} 
                        listIndex={anchor + index}
                        buttonIndex={index}
                        selected={index === selectedButtonIndex ? true : false}
                        setSelected={setSelectedButtonIndex} 
                    />
                )
            })}
        </section>
    )
}

export default HourSelectionContainer
