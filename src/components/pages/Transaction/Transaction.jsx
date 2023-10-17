import React, { useEffect, useState } from "react"

function Transaction() {
  // const [transactions, setTransactions] = useState([])
  
  // useEffect(()=>{
  //   fetch(import.meta.env.VITE_SERVER + '/api/transactions/data', {
  //     method: 'POST',
  //     headers:{
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify({'card_id': '652e55e0b0e19f3b6a4b124d'})
  //   })
  //   .then(res => {
  //     if (res.ok) return res.json()
  //   })
  //   .then(data => {
  //     setTransactions(data)
  //     console.log(data)
  //   })
  // },[])

  // const newDate = (number) => {
  //   const date = new Date(number)
  //   const day = date.getDate()
  //   return day
  // }

  return (
    <main>
      {/* <article>
        {transactions.sort((a,b) => b.date - a.date).map(transaction =>
          <div key={transaction._id}>
            <h1>{`${newDate(transaction.date)}`}</h1>
            <p>{transaction.category} : {transaction.value}</p>
          </div>
        )}
      </article> */}
    </main>
  )
}

export default Transaction
