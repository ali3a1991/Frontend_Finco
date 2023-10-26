import React from "react"
import IncomeTrend from "./IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeButton.module.scss"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { TransactionsContext } from "../../../../contexts/transactionsContext.jsx"
import { DarkModeContext } from "../../../../contexts/darkModeContext.jsx"

function IncomeButton({ handleIncomeFilter, totalIncome, incomeActive }) {
  const path = useLocation()
  const { darkModeData } = useContext(DarkModeContext)
  const { transactionsData } = useContext(TransactionsContext)

  const currentMonth = new Date()
  const startDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  )
  const endDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  )

  const earliestTransaction = transactionsData.reduce(
    (earliest, transaction) => {
      const transactionDate = new Date(transaction.date)
      if (
        (!earliest || transactionDate < earliest) &&
        transactionDate >= startDate &&
        transactionDate <= endDate
      ) {
        return transactionDate
      }
      return earliest
    },
    null
  )

  const balanceAtEarliestTransaction = transactionsData.reduce(
    (balance, transaction) => {
      const transactionDate = new Date(transaction.date)
      if (transactionDate.getTime() === earliestTransaction.getTime()) {
        if (transaction.transaction === "income") {
          return balance + transaction.value
        } else if (transaction.transaction === "expense") {
          return balance - transaction.value
        }
      }
      return balance
    },
    0
  )

  return (
    <div
      className={`${style.incomeButton} ${incomeActive && style.active} ${
        darkModeData && style.darkmode
      } ${darkModeData && incomeActive && style.darkmodeActive}`}
      onClick={path.pathname === "/transactions" ? handleIncomeFilter : null}>
      <IncomeTrend />
      <div>
        {path.pathname === "/transactions" && (
          <p className={style.incomeText}>Income</p>
        )}
        {path.pathname === "/transactions" && (
          <p className={style.incomeSum}>{totalIncome.toLocaleString()} €</p>
        )}
        {path.pathname === "/report" && (
          <p className={style.incomeText}>Beginning</p>
        )}
        {path.pathname === "/report" && (
          <p className={style.incomeSum}>
            {balanceAtEarliestTransaction.toLocaleString()} €
          </p>
        )}
      </div>
    </div>
  )
}

export default IncomeButton
