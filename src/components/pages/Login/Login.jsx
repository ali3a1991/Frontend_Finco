import React from "react"
import { Link, useNavigate } from "react-router-dom"
import style from "./Login.module.scss"
import Logo from "../../../assets/images/Logo.png"
import TextField from "@mui/material/TextField"
import InputField from "../../shared/Input/EMail/InputField.jsx"

function Login() {
  const navigator = useNavigate()

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
      console.log("Login successful!")
      console.log(response)
      navigator("/home")
    } else {
      console.log("Login failed.")
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
          Lorem ipsum dolor sit amet, consectetur adip sicing elit, sed do
          eiusmod.
        </p>
      </div>
      <form
        className={style.loginForm}
        onSubmit={submitLogin}>
        <div className={style.loginFormEma}>
          <InputField label={"E-Mail"} />
        </div>
        <div className={style.loginFormPas}>
          <InputField label={"Password"} />
        </div>
        <div className={style.loginForgot}>
          <p>Forgot password?</p>
        </div>
        <button
          className={style.loginButton}
          type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have any account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  )
}

export default Login
