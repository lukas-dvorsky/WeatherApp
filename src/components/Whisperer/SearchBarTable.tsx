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
    <>
      {data.map(item => {
        return(
        <div 
            key={itemKey(item)}
            onClick={() => handleClick(item)}    
            >
            {display(item)}
            {displaySecond && displaySecond(item)}
        </div>
      )})}
    </>
  )
}

export default SearchBarTable
