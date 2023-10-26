import React, { useContext } from "react"
import ExpenseTrend from "../../Buttons/Expense/ExpenseTrend/ExpenseTrend.jsx"
import style from "./ExpenseBigButton.module.scss"
import { DarkModeContext } from "../../../../contexts/darkModeContext.jsx"

function ExpenseBigButton({ totalExpense }) {
  const { darkModeData } = useContext(DarkModeContext)

  return (
    <div
      className={`${style.expenseBigButton} ${darkModeData && style.darkmode}`}>
      <div className={style.expenseBigButtonTrend}>
        <ExpenseTrend />
      </div>
      <div className={style.expenseBigButtonDetails}>
        <p>Expense</p>
        <p>-{totalExpense?.toLocaleString()} €</p>
      </div>
    </div>
  )
}

export default ExpenseBigButton
