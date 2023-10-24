import React, { useEffect, useState } from "react"
import style from "./Home.module.scss"
import Header from "../../shared/Header/Header.jsx"
import CreditCard from "../../shared/CreditCard/CreditCard.jsx"
import IncomeBigButton from "../../shared/BigButtons/IncomeBigButton/IncomeBigButton"
import ExpenseBigButton from "../../shared/BigButtons/ExpenseBigButton/ExpenseBigButton.jsx"
import Navi from "../../shared/Navbar/Navbar.jsx"
import HomeLimit from "../../shared/HomeLimit/HomeLimit.jsx"
import { useContext } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

function Home() {
  const [totalExpense, setTotalExpense] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const { transactionsData } = useContext(TransactionsContext)

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

  useEffect(() => {
    if (transactionsData.length > 0) {
      setIsLoading(false)
    }
  }, [transactionsData])

  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <CircularProgress />
    </Box>
  ) : (
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
