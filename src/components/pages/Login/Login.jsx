import React from "react"
import { Link, useNavigate } from "react-router-dom"
import style from "./Login.module.scss"
import Logo from "../../../assets/images/Logo.png"
import InputField from "../../shared/Input/InputField.jsx"
import BlueButton from "../../shared/BlueButtons/BlueButton"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"
import { TransactionsContext } from "../../../contexts/transactionsContext.jsx"
import { useState } from "react"

function Login() {
  const navigator = useNavigate()
  const { setUserData } = useContext(UserContext)
  const { setTransactionsData } = useContext(TransactionsContext)
  const [err, setErr] = useState("")

  async function submitLogin(event) {
    event.preventDefault()
    const form = new FormData(event.target)

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/auth/login",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    )
    if (response.ok) {
      const data = await response.json()
      setUserData(data)
      setTransactionsData(data.transactions_default_card)
      navigator("/home")
    } else {
      setErr("E-Mail or Password is incorrect.")
    }
  }

  return (
    <div className={style.login}>
      <div className={style.loginLogo}>
        <img
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className={style.loginWelcome}>
        <h1>Welcome back</h1>
        <p>
          Welcome back to Finco – Your partner for financial control and freedom
        </p>
      </div>
      <form
        className={style.loginForm}
        onSubmit={submitLogin}>
        <div className={style.loginFormEma}>
          <InputField
            label={"E-Mail"}
            data={"email"}
          />
        </div>
        <div className={style.loginFormPas}>
          <InputField
            label={"Password"}
            data={"password"}
            type={"password"}
          />
        </div>
        <div className={style.loginForgot}>
          <p>Forgot password?</p>
          {err && <p className={style.error_message}>{err}</p>}
        </div>
        <div className={style.loginBlueButton}>
          <BlueButton label={"Login"} />
        </div>
      </form>
      <p className={style.loginNoAccount}>
        Don't have any account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  )
}

export default Login
