import React, { useEffect, useState } from "react"
import ExpenseButton from "../Buttons/Expense/ExpenseButton"
import IncomeButton from "../Buttons/Income/IncomeButton"
import usePostFetch from "../../../customHook/usePostFetch"

function TransactionFilter({ setFetchData }) {
  const [totalExpense, setTotalExpense] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [expenseActive, setExpenseActive] = useState(false)
  const [incomeActive, setIncomeActive] = useState(false)
  const [fetchData2, setFetchData2] = usePostFetch(
    "api/transactions/data",
    "652e55e0b0e19f3b6a4b124d"
  )

  useEffect(() => {
    if (!incomeActive && !expenseActive) {
      setFetchData(fetchData2)
    }
  }, [incomeActive, expenseActive])

  const handleExpenseFilter = () => {
    const transactionFilter = fetchData2.filter(
      (trans) => trans.transaction === "expense"
    )
    setFetchData(transactionFilter)
    setExpenseActive((prev) => !prev)
    setIncomeActive(false)
  }

  const handleIncomeFilter = () => {
    const transactionFilter = fetchData2.filter(
      (trans) => trans.transaction === "income"
    )
    setFetchData(transactionFilter)
    setExpenseActive(false)
    setIncomeActive((prev) => !prev)
  }

  useEffect(() => {
    let totalExpense = 0
    let totalIncome = 0
    fetchData2.forEach((item) => {
      if (item.transaction === "income") {
        totalIncome += item.value
      } else if (item.transaction === "expense") {
        totalExpense += item.value
      }
    })
    setTotalExpense(totalExpense)
    setTotalIncome(totalIncome)
  }, [fetchData2])

  return (
    <div>
      <ExpenseButton
        totalExpense={totalExpense}
        handleExpenseFilter={handleExpenseFilter}
        expenseActive={expenseActive}
      />
      <IncomeButton
        handleIncomeFilter={handleIncomeFilter}
        totalIncome={totalIncome}
        incomeActive={incomeActive}
      />
    </div>
  )
}

export default TransactionFilter
