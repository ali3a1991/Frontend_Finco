import React from "react"
import ExpenseTrend from "./ExpenseTrend/ExpenseTrend.jsx"
import style from "./ExpenseButton.module.scss"
import { useLocation } from "react-router-dom"

function ExpenseButton({ totalExpense, handleExpenseFilter, expenseActive }) {
  const path = useLocation()

  return (
    <div
      className={`${style.expenseButton} ${expenseActive && "active"}`}
      onClick={handleExpenseFilter}>
      <ExpenseTrend />
      <div>
        {path.pathname === "/transactions" && (
          <p className={style.expenseText}>Expense</p>
        )}
        {path.pathname === "/report" && (
          <p className={style.expenseText}>Current</p>
        )}
        <p className={style.expenseSum}>-{totalExpense} €</p>
      </div>
    </div>
  )
}

export default ExpenseButton
