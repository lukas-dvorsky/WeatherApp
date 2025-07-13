import React, { useDeferredValue, useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import SearchBarTable from './SearchBarTable'

interface Props<T> {
  data: T[]
  limit?: number,
  placeholder?: string,
  searchBy: (item: T) => string;
}

function Whisperer<T>({data, limit = 10, placeholder = "", searchBy}: Props<T>) {

  const [isLoading, setIsLoading] = useState(false);

  // Deferred input
  const [input, setInput] = useState('Ostrav')
  const deferredInput = useDeferredValue(input);

  // Search data in JSON, send data to table.
  const filtered = useMemo(() => {
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
  
  console.log(filtered)

  return (
    <>
      <SearchBar></SearchBar>
      <SearchBarTable></SearchBarTable>
    </>
  )
}

export default Whisperer
