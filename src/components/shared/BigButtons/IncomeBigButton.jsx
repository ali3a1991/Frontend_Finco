import React from "react"
import IncomeTrend from "../Buttons/Income/IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeBigButton.module.scss"

function IncomeBigButton() {
  return (
    <div className={style.incomeBigButton}>
      <IncomeTrend />
      <div>
        <p className={style.incomeBigText}>Income</p>
        <p className={style.incomeBigSum}>6.754 €</p>
      </div>
    </div>
  )
}

export default IncomeBigButton
