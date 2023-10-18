import React from "react"
import ExpenseTrend from "../../Buttons/Expense/ExpenseTrend/ExpenseTrend.jsx"
import style from "./ExpenseBigButton.module.scss"

function ExpenseBigButton() {
  return (
    <div className={style.expenseBigButton}>
      <div className={style.expenseBigButtonTrend}>
        <ExpenseTrend />
      </div>
      <div className={style.expenseBigButtonDetails}>
        <p>Expense</p>
        <p>-2.498 €</p>
      </div>
    </div>
  )
}

export default ExpenseBigButton
