import React from "react"
import creditCard from "../../../assets/images/Card.png"
import style from "./CreditCard.module.scss"

function CreditCard() {
  return (
    <div className={style.credit_card}>
      <img
        src={creditCard}
        alt="Credit Card"
      />
    </div>
  )
}

export default CreditCard
