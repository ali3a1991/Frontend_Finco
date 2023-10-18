import React from "react"
import ExpenseTrend from "./ExpenseTrend/ExpenseTrend.jsx"
import style from "./ExpenseButton.module.scss"

function ExpenseButton() {
  return (
    <div className={style.expenseButton}>
      <ExpenseTrend />
      <div>
        <p className={style.expenseText}>Expense</p>
        <p className={style.expenseSum}>-4.321 €</p>
      </div>
    </div>
  )
}

export default ExpenseButton
