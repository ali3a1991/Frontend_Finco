import React, { useContext } from "react"
import style from "../transactionItem/TransactionItem.module.scss"
import salaryIcon from "../../../assets/images/sallary.png"
import insuranceIcon from "../../../assets/images/insurance.png"
import rentIcon from "../../../assets/images/rent.png"
import shoppingIcon from "../../../assets/images/shopping.png"
import foodAndDrinkIcon from "../../../assets/images/foodanddrink.png"
import { DarkModeContext } from "../../../contexts/darkModeContext"

function TransactionItem({ transaction }) {
  const { darkModeData } = useContext(DarkModeContext)
  const dateStructure = (dateNumber) => {
    const date = new Date(dateNumber)
    const dateArray = date.toUTCString().split(" ").splice(1, 3).join(" ")
    const timeArray = date.toUTCString().split(" ").splice(4, 1)[0].slice(0, 5)

    return `${timeArray} , ${dateArray}`
  }

  return (
    <div
      className={`${style.item_container} ${darkModeData && style.darkmode}`}>
      <div className={style.container_left}>
        <div className={style.icon_container}>
          {transaction.category === "Salary" && (
            <img
              src={salaryIcon}
              alt="transaction icon"
            />
          )}
          {transaction.category === "Insurance" && (
            <img
              src={insuranceIcon}
              alt=""
            />
          )}
          {transaction.category === "Rent" && (
            <img
              src={rentIcon}
              alt=""
            />
          )}
          {transaction.category === "Shopping" && (
            <img
              src={shoppingIcon}
              alt=""
            />
          )}
          {transaction.category === "Food & Drink" && (
            <img
              src={foodAndDrinkIcon}
              alt=""
            />
          )}
        </div>
        <div>
          <p className={style.category}>{transaction.category}</p>
          <p className={style.date}>{dateStructure(transaction.date)}</p>
        </div>
      </div>
      {transaction.transaction === "income" && (
        <p className={style.income_value}>
          {transaction.value.toLocaleString()} €
        </p>
      )}
      {transaction.transaction === "expense" && (
        <p className={style.expense_value}>
          - {transaction.value.toLocaleString()} €
        </p>
      )}
    </div>
  )
}

export default TransactionItem
