import React from "react"
import IncomeTrend from "./IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeButton.module.scss"

function IncomeButton() {
  return (
    <div className={style.incomeButton}>
      <IncomeTrend />
      <div>
        <p className={style.incomeText}>Income</p>
        <p className={style.incomeSum}>6.754 €</p>
      </div>
    </div>
  )
}

export default IncomeButton
