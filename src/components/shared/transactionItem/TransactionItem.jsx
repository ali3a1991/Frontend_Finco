import React from 'react'

function TransactionItem({transaction}) {

  const dateStructure = (dateNumber) => {
    const date = new Date(dateNumber)
    return date.toLocaleString()
  }

  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <p>{transaction.category}</p>
          <p>{dateStructure(transaction.date)}</p>
        </div>
        <p>{transaction.value} $</p>
      </div>
    </div>
  )
}

export default TransactionItem