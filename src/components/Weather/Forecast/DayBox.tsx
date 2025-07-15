interface Props {
    dayName: string
    listIndex: number
}

function DayBox({dayName, listIndex}: Props) {

    return (
        <div>
         <p style={{color: 'red'}}>{dayName} {listIndex}</p>
        </div>
    )
}

export default DayBox
