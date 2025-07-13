import React from 'react'

interface Props<T> {
    data: T[],
    display: (item: T) => string;
    itemKey:(item: T) => string | number
}

function SearchBarTable<T>({data, display, itemKey}: Props<T>) {
  return (
    <>
      {data.map(item => {
        return <p key={itemKey(item)}>{display(item)}</p>
      })}
    </>
  )
}

export default SearchBarTable
