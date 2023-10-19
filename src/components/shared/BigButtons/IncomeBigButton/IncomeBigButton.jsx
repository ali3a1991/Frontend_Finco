import React from "react"
import IncomeTrend from "../../Buttons/Income/IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeBigButton.module.scss"

function IncomeBigButton({totalIncome}) {
  return (
    <div className={style.incomeBigButton}>
      <div className={style.incomeBigButtonTrend}>
        <IncomeTrend />
      </div>
      <div className={style.incomeBigButtonDetails}>
        <p>Income</p>
        <p>{totalIncome} €</p>
      </div>
    </div>
  )
}

export default IncomeBigButton
