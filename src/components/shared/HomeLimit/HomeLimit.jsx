import React from "react"
import style from "./HomeLimit.module.scss"
import Limit from "../Buttons/Limit/Limit.jsx"
import ThreeDots from "../../../assets/images/threeDots.png"

function HomeLimit() {
  return (
    <div className={style.homeLimit}>
      <Limit />
      <div className={style.homeLimitText}>
        <p>Monthly spending limit:</p>
        <p>3.000€</p>
      </div>
      <div className={style.homeLimitThreeDots}>
        <img
          src={ThreeDots}
          alt=""
        />
      </div>
    </div>
  )
}

export default HomeLimit
