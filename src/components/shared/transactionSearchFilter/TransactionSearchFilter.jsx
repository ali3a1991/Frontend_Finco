import React, { useRef } from "react"

function TransactionSearchFilter({ setDateRevValue, setSearchValue }) {
  const dateRef = useRef()

  const setDateFilter = () => {
    setDateRevValue(dateRef.current.value)
  }

  const searchText = (event) => {
    setSearchValue(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    )
  }

  return (
    <div>
      <input
        type="text"
        onChange={searchText}
      />
      <input
        ref={dateRef}
        type="date"
        onChange={setDateFilter}
      />
    </div>
  )
}

export default TransactionSearchFilter
