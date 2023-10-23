import React, { useEffect, useState } from "react"
import style from "./Home.module.scss"
import Header from "../../shared/Header/Header.jsx"
import CreditCard from "../../shared/CreditCard/CreditCard.jsx"
import IncomeBigButton from "../../shared/BigButtons/IncomeBigButton/IncomeBigButton"
import ExpenseBigButton from "../../shared/BigButtons/ExpenseBigButton/ExpenseBigButton.jsx"
import Navi from "../../shared/Navbar/Navbar.jsx"
import HomeLimit from "../../shared/HomeLimit/HomeLimit.jsx"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"
import { TransactionsContext } from "../../../contexts/transactionsContext"

function Home() {
  const [totalExpense, setTotalExpense] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const { transactionsData, setTransactionsData } = useContext(TransactionsContext)
  const { userData } = useContext(UserContext)

  useEffect(() => {
    console.log(userData)
    fetch(import.meta.env.VITE_SERVER + "api/transactions/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ card_id: userData.userAllCards[0]._id }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
        console.log(data)
        setTransactionsData(data)
      })
  }, [])

  console.log(userData)

  useEffect(() => {
    let totalExpense = 0
    let totalIncome = 0
    transactionsData.forEach((item) => {
      if (item.transaction === "income") {
        totalIncome += item.value
      } else if (item.transaction === "expense") {
        totalExpense += item.value
      }
    })
    setTotalExpense(totalExpense)
    setTotalIncome(totalIncome)
  }, [transactionsData])

  return (
    <div className={style.home}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.creditCard}>
        <CreditCard />
      </div>
      <div className={style.homeTotalWallet}>
        <p>Total Wallet</p>
      </div>
      <div className={style.bigButtons}>
        <IncomeBigButton totalIncome={totalIncome} />
        <ExpenseBigButton totalExpense={totalExpense} />
      </div>
      <div className={style.homeLimit}>
        <HomeLimit />
      </div>
      <Navi />
    </div>
  )
}

export default Home
