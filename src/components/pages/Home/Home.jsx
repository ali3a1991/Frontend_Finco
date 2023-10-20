import React, { useEffect, useState } from "react"
import style from "./Home.module.scss"
import Header from "../../shared/Header/Header.jsx"
import CreditCard from "../../shared/CreditCard/CreditCard.jsx"
import IncomeBigButton from "../../shared/BigButtons/IncomeBigButton/IncomeBigButton"
import ExpenseBigButton from "../../shared/BigButtons/ExpenseBigButton/ExpenseBigButton.jsx"
import Navi from "../../shared/Navbar/Navbar.jsx"
import HomeLimit from "../../shared/HomeLimit/HomeLimit.jsx"
import usePostFetch from "../../../customHook/usePostFetch"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"

function Home() {
  const [totalExpense, setTotalExpense] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [fetchData2, setFetchData2] = usePostFetch(
    "api/transactions/data",
    "652e55e0b0e19f3b6a4b124d"
  )

  const { userData, setUserData } = useContext(UserContext)

  useEffect(() => {
    let totalExpense = 0
    let totalIncome = 0
    fetchData2.forEach((item) => {
      if (item.transaction === "income") {
        totalIncome += item.value
      } else if (item.transaction === "expense") {
        totalExpense += item.value
      }
    })
    setTotalExpense(totalExpense)
    setTotalIncome(totalIncome)
  }, [fetchData2])

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
