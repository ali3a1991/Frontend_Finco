import React from "react"
import style from "./Home.module.scss"
import Header from "../../shared/Header/Header.jsx"
import CreditCard from "../../shared/CreditCard/CreditCard.jsx"
import IncomeBigButton from "../../shared/BigButtons/IncomeBigButton/IncomeBigButton"
import ExpenseBigButton from "../../shared/BigButtons/ExpenseBigButton/ExpenseBigButton.jsx"
import Navi from "../../shared/Navbar/Navbar.jsx"
import HomeLimit from "../../shared/HomeLimit/HomeLimit.jsx"

function Home() {
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
        <IncomeBigButton />
        <ExpenseBigButton />
      </div>
      <div className={style.homeLimit}>
        <HomeLimit />
      </div>
      <Navi />
    </div>
  )
}

export default Home
