import React from "react"
import creditCard from "../../../assets/images/Card.png"
import trendingUp from "../../../assets/images/trendingUp.svg"
import trendingDown from "../../../assets/images/trendingDown.svg"
import limit from "../../../assets/images/limit.svg"
import threeDots from "../../../assets/images/threeDots.png"
import style from "./Home.module.scss"
import IncomeTrend from "../../shared/Buttons/Income/IncomeTrend/IncomeTrend.jsx"
import ExpenseTrend from "../../shared/Buttons/Expense/ExpenseTrend/ExpenseTrend"
import IncomeButton from "../../shared/Buttons/Income/IncomeButton.jsx"
import ExpenseButton from "../../shared/Buttons/Expense/ExpenseButton.jsx"
import CreditCard from "../../shared/CreditCard/CreditCard.jsx"
import IncomeBigButton from "../../shared/BigButtons/IncomeBigButton"
import Header from "../../shared/Header/Header.jsx"
import Navi from "../../shared/Navbar/Navbar.jsx"

function Home() {
  return (
    <div className={style.home}>
      <Header />
      {/* <IncomeTrend />
      <ExpenseTrend />
      <ExpenseButton />
      <IncomeButton /> */}
      {/* <IncomeBigButton /> */}
      <section>
        <CreditCard />
      </section>
      <section className={style.homeTotalWallet}>
        <p>Total Wallet</p>
      </section>
      <section className={style.homeIncExp}>
        <div>
          <div>
            <div className={style.homeIncExpTrendUp}>
              <img
                src={trendingUp}
                alt="Trending Arrow Up"
              />
            </div>
            <p>Income</p>
            <p>10.000 €</p>
          </div>
        </div>
        <div>
          <div>
            <div className={style.homeIncExpTrendDown}>
              <img
                src={trendingDown}
                alt="Trending Arrow Down"
              />
            </div>
            <p>Expense</p>
            <p>- 3.000 €</p>
          </div>
        </div>
      </section>
      <section className={style.homeLimit}>
        <div>
          <div>
            <div className={style.homeIncExpLimit}>
              <img
                className={style.homeIncExpLimitIcon}
                src={limit}
                alt="Limit"
              />
            </div>
          </div>
          <div className={style.homeIncExpLimitText}>
            <p>Monthly spending limit</p>
            <p>6.000 €</p>
          </div>
          <div>
            <img
              src={threeDots}
              alt="Three Dots"
            />
          </div>
        </div>
      </section>
      <Navi />
    </div>
  )
}

export default Home
