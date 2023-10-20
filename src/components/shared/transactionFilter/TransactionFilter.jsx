import React, { useEffect, useState } from "react"
import ExpenseButton from "../Buttons/Expense/ExpenseButton"
import IncomeButton from "../Buttons/Income/IncomeButton"
import usePostFetch from "../../../customHook/usePostFetch"

function TransactionFilter({ incomeActive, setIncomeActive, expenseActive, setExpenseActive }) {
  const [totalExpense, setTotalExpense] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [fetchData2, setFetchData2] = usePostFetch(
    "api/transactions/data",
    "652e55e0b0e19f3b6a4b124d"
  )

  const handleExpenseFilter = () => {
    setExpenseActive((prev) => !prev)
    setIncomeActive(false)
  }

  const handleIncomeFilter = () => {
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
