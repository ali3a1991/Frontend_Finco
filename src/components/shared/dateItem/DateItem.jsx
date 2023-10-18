import React from 'react'

function DateItem({transaction}) {

  const getDayName = (day) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return days[day]
  }

  return (
    <div>
      <p>{getDayName(transaction.day)}</p>
      <h2>{transaction.date}</h2>
    </div>
  )
}

export default DateItem