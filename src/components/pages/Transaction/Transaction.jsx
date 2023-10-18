import React, { useEffect, useState } from "react"
import TransactionItem from "../../shared/transactionItem/TransactionItem"

function Transaction() {
  const [fetchData, setFetchData] = useState([])
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER + "/api/transactions/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ card_id: "652e55e0b0e19f3b6a4b124d" }),
    })
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((data) => {
        setFetchData(data)
      })
  }, [])

  useEffect(() => {
    if (fetchData.length !== 0) {
      const transactionsArray = []
      console.log(fetchData)
      const firstDate = new Date(fetchData[0].date)
      const year = firstDate.getFullYear()
      const month = firstDate.getMonth()
      const day = firstDate.getDate()
      transactionsArray.push({ date: `${day}-${month}-${year}`, value: 0})
      transactionsArray.push(fetchData[0])

      for (let i = 1; i < fetchData.length; i++) {
        const transDate = new Date(fetchData[i - 1].date)
        const year = transDate.getFullYear()
        const month = transDate.getMonth()
        const day = transDate.getDate()
        const date2 = new Date(fetchData[i].date)
        const year2 = date2.getFullYear()
        const month2 = date2.getMonth()
        const day2 = date2.getDate()
        console.log(day, month, year)

        if (day === day2 && month === month2 && year === year2) {
          transactionsArray.push(fetchData[i])
        } else {
          transactionsArray.push({
            date: `${day2}-${month2}-${year2}`,
            value: 0
          })
          transactionsArray.push(fetchData[i])
        }
      }
      setTransactions(transactionsArray)
    }
  }, [fetchData])

  return (
    <main>
      {transactions.map((transaction, key) =>
        transaction.value !== 0 ?
        <TransactionItem key={transaction._id} transaction={transaction}/> : 
        <div key={key}>
          <h1>{transaction.date}</h1>
        </div>
      )}
    </main>
  )
}

export default Transaction
