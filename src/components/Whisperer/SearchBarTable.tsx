import React from 'react'

interface Props<T> {
    data: T[],
    display: (item: T) => string;
    displaySecond?: (item: T) => string;
    itemKey:(item: T) => string | number
}
// TODO: OnClick update store and show results.
function SearchBarTable<T>({data, display, itemKey, displaySecond = undefined}: Props<T>) {
  return (
    <>
      {data.map(item => {
        return(
        <div key={itemKey(item)}>
            {display(item)}
            {displaySecond && displaySecond(item)}
        </div>
      )})}
    </>
  )
}

export default SearchBarTable
