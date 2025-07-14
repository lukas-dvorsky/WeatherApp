interface Props<T> {
    data: T[],
    display: (item: T) => string;
    displaySecond?: (item: T) => string;
    itemKey:(item: T) => string | number
    onClick: (item: T) => void;
    setInput: React.Dispatch<React.SetStateAction<string>>
}
// TODO: OnClick update store and show results.
function SearchBarTable<T>({data, display, itemKey, displaySecond = undefined, onClick, setInput}: Props<T>) {
    function handleClick(item: T) {
        onClick(item)
        setInput('')
    }
  return (
    <ul>
      {data.map(item => {
        return(
        <li 
            key={itemKey(item)}
            onMouseDown={() => handleClick(item)}    
            >
            <span>{display(item)}</span>
            <span>{displaySecond && displaySecond(item)}</span>
        </li>
      )})}
    </ul>
  )
}

export default SearchBarTable
