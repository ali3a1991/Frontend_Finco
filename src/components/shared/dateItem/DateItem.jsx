import React, { useContext } from "react"
import style from "../dateItem/DateItem.module.scss"
import { DarkModeContext } from "../../../contexts/darkModeContext"

function DateItem({ transaction }) {
  const { darkModeData } = useContext(DarkModeContext)
  const getDayName = (day) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    return days[day]
  }

  return (
    <div
      className={`${style.date_item_container} ${
        darkModeData && style.darkmode
      }`}>
      <p>{getDayName(transaction.day)}</p>
      <h2>{transaction.date}</h2>
    </div>
  )
}

export default DateItem
