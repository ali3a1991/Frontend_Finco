import React, { useContext, useEffect, useState } from "react"
import style from "../transactionFilter/TransactionFilter.module.scss"
import ExpenseButton from "../Buttons/Expense/ExpenseButton"
import IncomeButton from "../Buttons/Income/IncomeButton"
import { TransactionsContext } from "../../../contexts/transactionsContext"

function TransactionFilter({
  incomeActive,
  setIncomeActive,
  expenseActive,
  setExpenseActive,
}) {
  const [totalExpense, setTotalExpense] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const { transactionsData } = useContext(TransactionsContext)

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
    transactionsData.forEach((item) => {
      if (item.transaction === "income") {
        totalIncome += item.value
      } else if (item.transaction === "expense") {
        totalExpense += item.value
      }
    })
    setTotalExpense(totalExpense)
    setTotalIncome(totalIncome)
  }, [transactionsData])

  return (
    <div className={style.buttons_container}>
      <IncomeButton
        handleIncomeFilter={handleIncomeFilter}
        totalIncome={totalIncome}
        incomeActive={incomeActive}
      />
      <ExpenseButton
        totalExpense={totalExpense}
        handleExpenseFilter={handleExpenseFilter}
        expenseActive={expenseActive}
      />
    </div>
  )
}

export default TransactionFilter
