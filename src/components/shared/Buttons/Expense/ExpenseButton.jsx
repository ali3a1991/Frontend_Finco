import React from "react"
import ExpenseTrend from "./ExpenseTrend/ExpenseTrend.jsx"
import style from "./ExpenseButton.module.scss"

function ExpenseButton({ totalExpense, handleExpenseFilter, expenseActive }) {
  return (
    <div
      className={`${style.expenseButton} ${expenseActive && "active"}`}
      onClick={handleExpenseFilter}>
      <ExpenseTrend />
      <div>
        <p className={style.expenseText}>Expense</p>
        <p className={style.expenseSum}>-{totalExpense} €</p>
      </div>
    </div>
  )
}

export default ExpenseButton
