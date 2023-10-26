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
import AutoRouter from "./components/shared/Protected/AutoRouter.jsx"
import style from "../src/App.module.scss"
import { useContext } from "react"
import { DarkModeContext } from "./contexts/darkModeContext.jsx"

function App() {
  const { darkModeData } = useContext(DarkModeContext)

  return (
    <div className={darkModeData ? style.darkmode : ""}>
      <Routes>
        <Route
          path="/"
          element={<OnboardingScreen />}
        />
        <Route element={<AutoRouter />}>
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
        </Route>
        <Route element={<Protected />}>
          <Route
            path="/account"
            element={<AccountSetup />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/account-settings"
            element={<Account />}
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
    </div>
  )
}

export default App
