import { useDispatch } from "react-redux"
import { setAnchorListIndex, setSelectedListIndex } from "../../../../redux/state/weatherSlice"

interface Props {
    dayName: string
    listIndex: number
    buttonIndex: number
    selected?: boolean
    setSelected?: React.Dispatch<React.SetStateAction<number>>
}



function DaySelectionButton({dayName, listIndex, buttonIndex, selected = false, setSelected}: Props) {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(setAnchorListIndex(listIndex))
        dispatch(setSelectedListIndex(listIndex))
        setSelected !== undefined && setSelected(buttonIndex)
    }

    return (
        <button className={`${selected && 'selected'}`} onClick={() => handleClick()}>
            {dayName}
        </button>
    )
}

export default DaySelectionButton
