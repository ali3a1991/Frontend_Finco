import { Route, Routes } from "react-router-dom"
import "./App.scss"
import OnboardingScreen from "./components/pages/OnboardingScreen/OnboardingScreen.jsx"
import OnboardingTutorial from "./components/pages/OnboardingTutorial/OnboardingTutorial.jsx"
import Register from "./components/pages/Register/Register.jsx"
import AccountSetup from "./components/pages/AccountSetup/AccountSetup.jsx"
import Login from "./components/pages/Login/Login.jsx"
import Home from "./components/pages/Home/Home.jsx"
import Transaction from "./components/pages/Transaction/Transaction.jsx"
import TransactionSearch from "./components/pages/TransactionSearch/TransactionSearch.jsx"
import AddIncome from "./components/pages/AddIncome/AddIncome.jsx"
import AddExpenses from "./components/pages/AddExpenses/AddExpenses.jsx"
import Report from "./components/pages/Report/Report.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<OnboardingScreen />}
        />
        <Route
          path="/onboarding"
          element={<OnboardingTutorial />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/account"
          element={<AccountSetup />}
        />
        <Route
          path="/login"
          element={<Login />}
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
          path="/transactions-search"
          element={<TransactionSearch />}
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
      </Routes>
    </>
  )
}

export default App
