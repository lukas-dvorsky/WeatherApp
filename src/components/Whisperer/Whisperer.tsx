import { useDeferredValue, useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import SearchBarTable from './SearchBarTable'

interface Props<T> {
  data: T[]
  limit?: number,
  placeholder?: string,
  searchBy: (item: T) => string;
  display: (item: T) => string;
  displaySecond?: (item: T) => string;
  itemKey: (item: T) => string | number
  onClick: (item: T) => void
}

function Whisperer<T>({data, limit = 10, placeholder = "", searchBy, display, displaySecond, itemKey, onClick}: Props<T>) {

  const [isLoading, setIsLoading] = useState(false);

  // Deferred input
  const [input, setInput] = useState('')
  const deferredInput = useDeferredValue(input);

  // Search data in JSON, send data to table.
  const filtered = useMemo(() => {
    //if(deferredInput === '') return

    setIsLoading(true);

    const inputLower = deferredInput.toLocaleLowerCase();

    // Search occurrence that starts with users input
    const startsWith = data.filter(item => {
      return searchBy(item).toLowerCase().startsWith(inputLower);
    });

    // Find other occurancies
    const includes = data.filter(item => {
      return !searchBy(item).toLowerCase().startsWith(inputLower) && 
              searchBy(item).toLowerCase().includes(inputLower)
    });

    // Combine occurancies
    const combined = [...startsWith, ...includes];

    setIsLoading(false);
    // Slice occurancies to 10
    return combined.slice(0, limit);
    
  }, [deferredInput])
  
  return (
    <>
      <SearchBar placeholder={placeholder} inputValue={input} setInputValue={setInput}></SearchBar>
      {deferredInput.trim() !== '' &&
          <SearchBarTable
            data={filtered} 
            display={display} 
            displaySecond={displaySecond} 
            itemKey={itemKey} 
            onClick={onClick}
            setInput={setInput}>
          </SearchBarTable>
      }
    </>
  )
}

export default Whisperer
