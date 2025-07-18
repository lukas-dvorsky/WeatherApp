import { useState } from 'react';
import { getDayNames, getUniqueDays } from '../../../../utils/functions';
import type { WeatherDataList } from '../../../../utils/types'
import DaySelectionButton from './DaySelectionButton';

interface Props {
    lists: WeatherDataList[]
    styles?: string
}

function DaySelectionContainer({lists, styles}: Props) {
    const uniqueDaysId = getUniqueDays(lists);
    const daysNames = getDayNames(lists, uniqueDaysId)

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0)

    return (
        <section className={styles}>
            {uniqueDaysId.map((day, index)=> {
                return(
                    <DaySelectionButton 
                        key={index}
                        dayName={daysNames[index]}
                        listIndex={day}
                        buttonIndex={index}
                        selected={index === selectedButtonIndex ? true : false}
                        setSelected={setSelectedButtonIndex}
                    />
                )
            })}
        </section>
    )
}

export default DaySelectionContainer
