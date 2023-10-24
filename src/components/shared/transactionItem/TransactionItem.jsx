import React from "react"
import style from "../transactionItem/TransactionItem.module.scss"
import salaryIcon from "../../../assets/images/sallary.png"
import insuranceIcon from "../../../assets/images/insurance.png"
import rentIcon from "../../../assets/images/rent.png"
import shoppingIcon from "../../../assets/images/shopping.png"
import foodAndDrinkIcon from "../../../assets/images/foodanddrink.png"

function TransactionItem({ transaction }) {
  const dateStructure = (dateNumber) => {
    const date = new Date(dateNumber)
    const dateArray = date.toUTCString().split(" ").splice(1, 3).join(" ")
    const timeArray = date.toUTCString().split(" ").splice(4, 1)[0].slice(0, 5)

    return `${timeArray} , ${dateArray}`
  }

  return (
    <div className={style.item_container}>
      <div className={style.container_left}>
        <div className={style.icon_container}>
          {transaction.category === "salary" && (
            <img
              src={salaryIcon}
              alt="transaction icon"
            />
          )}
          {transaction.category === "insurance" && (
            <img
              src={insuranceIcon}
              alt=""
            />
          )}
          {transaction.category === "rent" && (
            <img
              src={rentIcon}
              alt=""
            />
          )}
          {transaction.category === "shopping" && (
            <img
              src={shoppingIcon}
              alt=""
            />
          )}
          {transaction.category === "foodAndDrink" && (
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
        <p className={style.income_value}>{transaction.value} €</p>
      )}
      {transaction.transaction === "expense" && (
        <p className={style.expense_value}>- {transaction.value} €</p>
      )}
    </div>
  )
}

export default TransactionItem
