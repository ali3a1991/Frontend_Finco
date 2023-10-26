import React, { useContext } from "react"
import IncomeTrend from "../../Buttons/Income/IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeBigButton.module.scss"
import { DarkModeContext } from "../../../../contexts/darkModeContext.jsx"

function IncomeBigButton({ totalIncome }) {
  const { darkModeData } = useContext(DarkModeContext)
  return (
    <div
      className={`${style.incomeBigButton} ${darkModeData && style.darkmode}`}>
      <div className={style.incomeBigButtonTrend}>
        <IncomeTrend />
      </div>
      <div className={style.incomeBigButtonDetails}>
        <p>Income</p>
        <p>{totalIncome?.toLocaleString()} €</p>
      </div>
    </div>
  )
}

export default IncomeBigButton
