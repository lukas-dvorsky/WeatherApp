import { useDispatch } from "react-redux"
import { setAnchorListIndex } from "../../../redux/state/weatherSlice"

interface Props {
    dayName: string
    listIndex: number
}

function DayBox({dayName, listIndex}: Props) {
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(setAnchorListIndex(listIndex))
        }
        }>
            <p style={{color: 'red'}}>{dayName} {listIndex}</p>
        </button>
    )
}

export default DayBox
