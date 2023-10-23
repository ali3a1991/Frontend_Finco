import React, { useContext, useEffect, useState } from "react"
import TransactionItem from "../../shared/transactionItem/TransactionItem"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import Header from "../../shared/Header/Header.jsx"
import DateItem from "../../shared/dateItem/DateItem"
import Filter from "../../shared/filter/Filter"
import { TransactionsContext } from "../../../contexts/transactionsContext"

function Transaction() {
  const { transactionsData } = useContext(TransactionsContext)
  const [transactions, setTransactions] = useState([])
  const [result, setResult] = useState(true)
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    setFetchData(transactionsData)
  }, [])

  useEffect(() => {
    console.log(fetchData)
    if (fetchData.length > 0) {
      const transactionsArray = []
      const firstDate = new Date(fetchData[0].date)

      transactionsArray.push({
        date: `${dateStyle(firstDate.getDate())}-${dateStyle(
          firstDate.getMonth() + 1
        )}-${firstDate.getFullYear()}`,
        value: "",
        day: firstDate.getUTCDay(),
      })

      transactionsArray.push(fetchData[0])

      for (let i = 1; i < fetchData.length; i++) {
        const transDatePrevItem = new Date(fetchData[i - 1].date)
        const yearPrevItem = transDatePrevItem.getFullYear()
        const monthPrevItem = transDatePrevItem.getMonth()
        const dayPrevItem = transDatePrevItem.getDate()
        const transDateItem = new Date(fetchData[i].date)
        const yearItem = transDateItem.getFullYear()
        const monthItem = transDateItem.getMonth()
        const dayItem = transDateItem.getDate()
        const weekDay = transDateItem.getUTCDay()

        if (
          dayPrevItem === dayItem &&
          monthPrevItem === monthItem &&
          yearPrevItem === yearItem
        ) {
          transactionsArray.push(fetchData[i])
        } else {
          transactionsArray.push({
            date: `${dateStyle(dayItem)}-${dateStyle(
              monthItem + 1
            )}-${yearItem}`,
            value: "",
            day: weekDay,
          })

          transactionsArray.push(fetchData[i])
        }
      }

      setTransactions(transactionsArray)
      setResult(true)
    } else {
      setResult(false)
    }
  }, [fetchData])

  function dateStyle(num) {
    if (num < 10) return "0" + num
    else return num
  }

  return (
    <>
      <Header />
      <div>
        <p>All Transactions</p>
        <Filter setFetchData={setFetchData} />
      </div>
      {result ? (
        <main>
          {transactions.map((transaction, key) =>
            transaction.value !== "" ? (
              <TransactionItem
                key={transaction._id}
                transaction={transaction}
              />
            ) : (
              <DateItem
                key={key}
                transaction={transaction}
              />
            )
          )}
        </main>
      ) : (
        <p>No Transaction</p>
      )}
      <Navbar />
    </>
  )
}

export default Transaction
