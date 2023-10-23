import React from 'react'

function DateItem({transaction}) {

  const getDayName = (day) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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