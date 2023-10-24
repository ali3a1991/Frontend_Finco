import React, { createContext, useState } from "react"

export const TransactionsContext = createContext()

export const TransactionsProvider = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([])

  return (
    <TransactionsContext.Provider
      value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  )
}
