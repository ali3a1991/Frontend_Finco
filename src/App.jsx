import { Route, Routes } from "react-router-dom"
import OnboardingScreen from "./components/pages/OnboardingScreen/OnboardingScreen.jsx"
import OnboardingTutorial from "./components/pages/OnboardingTutorial/OnboardingTutorial.jsx"
import Register from "./components/pages/Register/Register.jsx"
import AccountSetup from "./components/pages/AccountSetup/AccountSetup.jsx"
import Login from "./components/pages/Login/Login.jsx"
import Home from "./components/pages/Home/Home.jsx"
import Transaction from "./components/pages/Transaction/Transaction.jsx"
import AddIncome from "./components/pages/AddIncome/AddIncome.jsx"
import AddExpenses from "./components/pages/AddExpenses/AddExpenses.jsx"
import Report from "./components/pages/Report/Report.jsx"
import Account from "./components/pages/Account/Account.jsx"
import Protected from "./components/shared/Protected/Protected.jsx"
import { useContext, useEffect } from "react"
import { UserContext } from "./contexts/userContext.jsx"
import { TransactionsContext } from "./contexts/transactionsContext.jsx"

function App() {
  const { setUserData } = useContext(UserContext)
  const { setTransactionsData } = useContext(TransactionsContext)

  useEffect(() => {
    const reload = async () => {
      const response = await fetch(
        import.meta.env.VITE_SERVER + "api/auth/get",
        {
          credentials: "include",
        }
      )
      const data = await response.json()
      const res = await fetch(
        import.meta.env.VITE_SERVER + "api/transactions/data",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ card_id: data.userAllCards[0]._id }),
        }
      )
      const trans = await res.json()
      setUserData(data)
      setTransactionsData(trans)
    }
    reload()
  }, [])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<OnboardingScreen />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/onboarding"
          element={<OnboardingTutorial />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route element={<Protected />}>
          <Route
            path="/account"
            element={<AccountSetup />}
          />
          <Route
            path="/account-settings"
            element={<Account />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/transactions"
            element={<Transaction />}
          />
          <Route
            path="/add-income"
            element={<AddIncome />}
          />
          <Route
            path="/add-expenses"
            element={<AddExpenses />}
          />
          <Route
            path="/report"
            element={<Report />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
