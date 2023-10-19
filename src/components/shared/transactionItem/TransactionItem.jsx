import React from 'react'

function TransactionItem({transaction}) {

  const dateStructure = (dateNumber) => {
    const date = new Date(dateNumber)
    const dateArray = date.toUTCString().split(' ').splice(1,3).join(' ')
    const timeArray = date.toUTCString().split(' ').splice(4,1)[0].slice(0,5)

    return `${timeArray} , ${dateArray}`
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