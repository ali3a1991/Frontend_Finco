import React from "react"
import trendingDown from "../../../../../assets/images/trendingDown.svg"
import style from "./ExpenseTrend.module.scss"

function ExpenseTrend() {
  return (
    <div className={style.expenseTrend}>
      <img
        src={trendingDown}
        alt="Trend Down"
      />
    </div>
  )
}

export default ExpenseTrend
