import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.scss"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./contexts/userContext.jsx"
import { TransactionsProvider } from "./contexts/transactionsContext.jsx"
import { DarkModeProvider } from "./contexts/darkModeContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TransactionsProvider>
          <DarkModeProvider>
            <App />
          </DarkModeProvider>
        </TransactionsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
