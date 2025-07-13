import React from 'react'

interface Props {
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
}
function SearchBar ({inputValue, setInputValue, placeholder}: Props) {
  return (
    <>
      <input
        type="text" 
        placeholder={placeholder} 
        value={inputValue} 
        onChange={(e) => {
            setInputValue(e.target.value)
        }} 
        />
    </>
  )
}

export default SearchBar
