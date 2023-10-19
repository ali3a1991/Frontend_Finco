import React from "react"
import usePostFetch from "../../../customHook/usePostFetch"

function TransactionSearchFilter({ setFetchData }) {
  const [fetchData2, setFetchData2] = usePostFetch(
    "api/transactions/data",
    "652e55e0b0e19f3b6a4b124d"
  )

  const test = (event) => {
    const dateValue = new Date(event.target.value)
    const yearValue = dateValue.getFullYear()
    const monthValue = dateValue.getMonth()
    const dayValue = dateValue.getDate()

    const dataFilterDate = fetchData2.filter((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      if (day === dayValue && month === monthValue && year === yearValue) {
        return item
      }
    })
    setFetchData(dataFilterDate)
  }
  return (
    <div>
      <input
        type="date"
        onChange={test}
      />
    </div>
  )
}

export default TransactionSearchFilter
