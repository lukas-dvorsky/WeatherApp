import type { WeatherDataList } from '../../../../utils/types'
import DaySelectionButton from './DaySelectionButton';

interface Props {
    lists: WeatherDataList[]
}

// Get all unique days indexes, save them for future use
function getUniqueDays(lists: WeatherDataList[]) {
    const unique: number[] = []

    lists.forEach((list, index) => {

        if (!unique.some(i => lists[i].dt_txt.split(' ')[0] === list.dt_txt.split(' ')[0])) {
            unique.push(index);
        }
    });

    return unique
}

function getDayNames(lists: WeatherDataList[], listIndexes: number[]) {
    const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const days: string[] = []

    listIndexes.forEach(i => {
        const date = new Date(lists[i].dt_txt);
        const day = date.getDay();
        days.push(daysOfWeek[day]);
    });

    return days;

}

function DaySelectionContainer({lists}: Props) {
    const uniqueDaysId = getUniqueDays(lists);
    const daysNames = getDayNames(lists, uniqueDaysId)

    return (
        <section>
            {uniqueDaysId.map((day, index)=> {
                return <DaySelectionButton key={index} dayName={daysNames[index]} listIndex={day}/>
            })}
        </section>
    )
}

export default DaySelectionContainer
