import React, { useEffect, useState } from "react"
import usePostFetch from "../../../customHook/usePostFetch"
import TransactionFilter from "../transactionFilter/TransactionFilter"
import TransactionSearchFilter from "../transactionSearchFilter/TransactionSearchFilter"

function Filter({ setFetchData }) {
  const [dateRefValue, setDateRevValue] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [incomeActive, setIncomeActive] = useState(false)
  const [expenseActive, setExpenseActive] = useState(false)
  const [fetchData2, setFetchData2] = usePostFetch(
    "api/transactions/data",
    "65326ce471fadf8e8d77211e"
  )

  useEffect(() => {
    let filterData = fetchData2.map((item) => item)
    if (dateRefValue) {
      const dateValue = new Date(dateRefValue)
      const yearValue = dateValue.getFullYear()
      const monthValue = dateValue.getMonth()
      const dayValue = dateValue.getDate()

      filterData = fetchData2.filter((item) => {
        const date = new Date(item.date)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        if (day === dayValue && month === monthValue && year === yearValue) {
          return item
        }
      })
    }
    if (expenseActive) {
      filterData = filterData.filter((trans) => trans.transaction === "expense")
    }
    if (incomeActive) {
      filterData = filterData.filter((trans) => trans.transaction === "income")
    }
    if (searchValue) {
      filterData = filterData.filter((trans) =>
        trans.category.includes(searchValue)
      )
    }

    setFetchData(filterData)
  }, [dateRefValue, expenseActive, incomeActive, searchValue])

  return (
    <div>
      <TransactionSearchFilter
        setDateRevValue={setDateRevValue}
        setSearchValue={setSearchValue}
      />
      <TransactionFilter
        incomeActive={incomeActive}
        setIncomeActive={setIncomeActive}
        expenseActive={expenseActive}
        setExpenseActive={setExpenseActive}
      />
    </div>
  )
}

export default Filter
