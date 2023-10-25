import React, { useContext, useEffect, useState } from "react"
import creditCard from "../../../assets/images/Card.png"
import style from "./CreditCard.module.scss"
import { UserContext } from "../../../contexts/userContext"

function CreditCard() {
  const { userData } = useContext(UserContext)
  const [cardNum, setCardNum] = useState("")
  const [cardExp, setCardExp] = useState("")

  useEffect(() => {
    let cardNumber = ''
    let cardExpiration = ''

    if (userData.userAllCards) {
      cardNumber = userData.userAllCards[0].card_number?.slice(15, 19)
      cardExpiration = userData.userAllCards[0].expiration_date
    }
    
    setCardNum(cardNumber)
    setCardExp(cardExpiration)
  }, [userData])

  return (
    <div className={style.credit_card}>
      <p>{cardNum}</p>
      <p>{cardExp}</p>
      <img
        src={creditCard}
        alt="Credit Card"
      />
    </div>
  )
}

export default CreditCard
