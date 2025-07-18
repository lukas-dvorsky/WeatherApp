import type { WeatherDataList } from "./types";

export function getLocaleTime(str: string) {
    const date = new Date(str)
    date.toLocaleString();
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
}

// Get all unique days indexes, save them for future use
export function getUniqueDays(lists: WeatherDataList[]) {
    const unique: number[] = []

    lists.forEach((list, index) => {

        if (!unique.some(i => lists[i].dt_txt.split(' ')[0] === list.dt_txt.split(' ')[0])) {
            unique.push(index);
        }
    });

    return unique
}

// Get days names for list items
export function getDayNames(lists: WeatherDataList[] | WeatherDataList, listIndexes: number[] | number) {
    const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const days: string[] = []

    if(Array.isArray(lists) && Array.isArray(listIndexes)) {
        listIndexes.forEach(i => {
            const date = new Date(lists[i].dt_txt);
            const day = date.getDay();
            days.push(daysOfWeek[day]);
        });
        return days;
    } else if(!Array.isArray(lists) && !Array.isArray(listIndexes)) {
        const date = new Date(lists.dt_txt);
        const day = date.getDay();
        return daysOfWeek[day];
    } else {
        console.error('getDayNames: You can pass only two arrays or no array at all.')
        return ''
    }
}