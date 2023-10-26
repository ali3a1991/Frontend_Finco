import React from "react"
import ExpenseTrend from "./ExpenseTrend/ExpenseTrend.jsx"
import style from "./ExpenseButton.module.scss"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { TransactionsContext } from "../../../../contexts/transactionsContext.jsx"
import { DarkModeContext } from "../../../../contexts/darkModeContext.jsx"

function ExpenseButton({ totalExpense, handleExpenseFilter, expenseActive }) {
  const path = useLocation()
  const { darkModeData } = useContext(DarkModeContext)
  const { transactionsData } = useContext(TransactionsContext)

  const currentMonth = new Date()
  const startDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  )
  const endDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  )

  const latestBalance = transactionsData.reduce((balance, transaction) => {
    const transactionDate = new Date(transaction.date)
    if (transactionDate >= startDate && transactionDate <= endDate) {
      if (transaction.transaction === "income") {
        return balance + transaction.value
      } else if (transaction.transaction === "expense") {
        return balance - transaction.value
      }
    }
    return balance
  }, 0)

  return (
    <div
      className={`${style.expenseButton} ${expenseActive && style.active} ${
        darkModeData && style.darkmode
      } ${darkModeData && expenseActive && style.darkmodeActive}`}
      onClick={path.pathname === "/transactions" ? handleExpenseFilter : null}>
      <ExpenseTrend />
      <div>
        {path.pathname === "/transactions" && (
          <p className={style.expenseText}>Expense</p>
        )}
        {path.pathname === "/transactions" && (
          <p className={style.expenseSum}>
            - {totalExpense.toLocaleString()} €
          </p>
        )}
        {path.pathname === "/report" && (
          <p className={style.expenseText}>Current</p>
        )}
        {path.pathname === "/report" && (
          <p className={style.expenseSum}>{latestBalance.toLocaleString()} €</p>
        )}
      </div>
    </div>
  )
}

export default ExpenseButton
