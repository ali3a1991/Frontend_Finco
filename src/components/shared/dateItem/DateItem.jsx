import React from "react"
import style from "../dateItem/DateItem.module.scss"

function DateItem({ transaction }) {
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
    <div className={style.date_item_container}>
      <p>{getDayName(transaction.day)}</p>
      <h2>{transaction.date}</h2>
    </div>
  )
}

export default DateItem
