import React from "react"
import trendingUp from "../../../../../assets/images/trendingUp.svg"
import style from "./IncomeTrend.module.scss"

function IncomeTrend() {
  return (
    <div className={style.incomeTrend}>
      <img
        src={trendingUp}
        alt="Trend Up"
      />
    </div>
  )
}

export default IncomeTrend
