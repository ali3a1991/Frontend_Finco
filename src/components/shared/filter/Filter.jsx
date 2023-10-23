import React, { useContext, useEffect, useState } from "react"
import TransactionFilter from "../transactionFilter/TransactionFilter"
import TransactionSearchFilter from "../transactionSearchFilter/TransactionSearchFilter"
import { TransactionsContext } from "../../../contexts/transactionsContext"

function Filter({ setFetchData }) {
  const [dateRefValue, setDateRevValue] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [incomeActive, setIncomeActive] = useState(false)
  const [expenseActive, setExpenseActive] = useState(false)
  const { transactionsData } = useContext(TransactionsContext)

  useEffect(() => {
    let filterData = transactionsData.map((item) => item)
    if (dateRefValue) {
      const dateValue = new Date(dateRefValue)
      const yearValue = dateValue.getFullYear()
      const monthValue = dateValue.getMonth()
      const dayValue = dateValue.getDate()

      filterData = transactionsData.filter((item) => {
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
