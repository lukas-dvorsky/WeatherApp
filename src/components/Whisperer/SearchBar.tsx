import React from 'react'

interface Props {
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
}
function SearchBar ({inputValue, setInputValue, placeholder}: Props) {
  return (
    <div className='search-bar'>
      <input
        type="text" 
        placeholder={placeholder} 
        value={inputValue} 
        onChange={(e) => {
            setInputValue(e.target.value)
        }} 
      />
      <button
        className='remove-input'
        onClick={() => {setInputValue('')}}>
          x
      </button>
    </div>
  )
}

export default SearchBar
