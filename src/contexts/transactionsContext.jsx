import React, { createContext, useState } from "react"
import { useContext } from "react"
import { UserContext } from "./userContext.jsx"

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
