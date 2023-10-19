import React from "react"
import IncomeTrend from "./IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeButton.module.scss"

function IncomeButton({ handleIncomeFilter, totalIncome, incomeActive }) {
  return (
    <div
      className={`${style.incomeButton} ${incomeActive && "active"}`}
      onClick={handleIncomeFilter}>
      <IncomeTrend />
      <div>
        <p className={style.incomeText}>Income</p>
        <p className={style.incomeSum}>{totalIncome} €</p>
      </div>
    </div>
  )
}

export default IncomeButton
