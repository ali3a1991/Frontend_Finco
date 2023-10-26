import React from "react"
import style from "./HomeLimit.module.scss"
import Limit from "../Buttons/Limit/Limit.jsx"
import ThreeDots from "../../../assets/images/threeDots.png"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"
import { DarkModeContext } from "../../../contexts/darkModeContext.jsx"

function HomeLimit() {
  const { userData } = useContext(UserContext)
  const { darkModeData } = useContext(DarkModeContext)

  return (
    <div className={`${style.homeLimit} ${darkModeData && style.darkmode}`}>
      <Limit />
      <div className={style.homeLimitText}>
        <p>Monthly spending limit:</p>
        <p>{userData.spending_limit?.toLocaleString()} €</p>
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
