import React from "react"
import IncomeTrend from "./IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeButton.module.scss"
import { useLocation } from "react-router-dom"

function IncomeButton({ handleIncomeFilter, totalIncome, incomeActive }) {
  const path = useLocation()

  return (
    <div
      className={`${style.incomeButton} ${incomeActive && "active"}`}
      onClick={handleIncomeFilter}>
      <IncomeTrend />
      <div>
        {path.pathname === "/transactions" && (
          <p className={style.incomeText}>Income</p>
        )}
        {path.pathname === "/report" && (
          <p className={style.incomeText}>Beginning</p>
        )}
        <p className={style.incomeSum}>{totalIncome} €</p>
      </div>
    </div>
  )
}

export default IncomeButton
