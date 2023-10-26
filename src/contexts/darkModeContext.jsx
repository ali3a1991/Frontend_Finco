import React, { createContext, useState } from "react"

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [darkModeData, setDarkModeData] = useState(false)

  return (
    <DarkModeContext.Provider value={{ darkModeData, setDarkModeData }}>
      {children}
    </DarkModeContext.Provider>
  )
}
