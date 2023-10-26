import React from "react"
import IncomeTrend from "./IncomeTrend/IncomeTrend.jsx"
import style from "./IncomeButton.module.scss"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { TransactionsContext } from "../../../../contexts/transactionsContext.jsx"

function IncomeButton({ handleIncomeFilter, totalIncome, incomeActive }) {
  const path = useLocation()

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

  function removeTime(dateObject) {
    return new Date(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate()
    )
  }

  const earliestTransaction = transactionsData.reduce(
    (earliest, transaction) => {
      const transactionDate = removeTime(new Date(transaction.date))
      if (
        (!earliest || transactionDate < earliest) &&
        transactionDate >= removeTime(startDate) &&
        transactionDate <= removeTime(endDate)
      ) {
        return transactionDate
      }
      return earliest
    },
    null
  )

  const transactionsAtEarliestDate = transactionsData.filter((transaction) => {
    const transactionDate = removeTime(new Date(transaction.date))
    return transactionDate.getTime() === earliestTransaction.getTime()
  })

  console.log(transactionsAtEarliestDate)

  const balanceAtEarliestTransaction = transactionsAtEarliestDate.reduce(
    (balance, transaction) => {
      if (transaction.transaction === "income") {
        return balance + Number(transaction.value)
      } else if (transaction.transaction === "expense") {
        return balance - Number(transaction.value)
      }
      return balance
    },
    0
  )

  return (
    <div
      className={`${style.incomeButton} ${incomeActive && "active"}`}
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
