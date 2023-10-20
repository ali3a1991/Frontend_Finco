import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import TermsAndService from "./TermsAndService.jsx"
import style from "../../../components/pages/Register/Register.module.scss"
import Logo from "../../../assets/images/Logo.png"
import InputField from "../../shared/Input/InputField.jsx"
import BlueButton from "../../shared/BlueButtons/BlueButton.jsx"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"

function Register() {
  const [showTerms, setShowTerms] = useState(false)

  const { userData, setUserData } = useContext(UserContext)

  const navigator = useNavigate()

  async function submitRegistration(event) {
    event.preventDefault()
    const form = new FormData(event.target)

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/auth/register",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    )
    if (response.ok) {
      const data = await response.json()
      setUserData(data)
      console.log("Registrierung erfolgreich!")
      navigator("/account")
    } else {
      console.log("Registrierung fehlgeschlagen.")
    }
  }

  function openTerms() {
    setShowTerms(true)
  }

  function closeTerms() {
    setShowTerms(false)
  }

  return (
    <div className={style.register}>
      <div className={style.registerLogo}>
        <img
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className={style.registerWelcome}>
        <h1>Create an account</h1>
        <p>Join Finco – Your gateway to financial empowerment and control </p>
      </div>
      <form
        className={style.registerForm}
        onSubmit={submitRegistration}>
        <InputField
          required
          label={"Name *"}
          data={"username"}
        />
        <InputField
          required
          label={"E-Mail *"}
          data={"email"}
        />
        <InputField
          required
          label={"Password *"}
          data={"password"}
        />
        <div className={style.registerFormTerms}>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
          />
          <label htmlFor="terms"></label>
          Agree to our <span onClick={openTerms}>Terms and Service</span>
          {showTerms && (
            <TermsAndService
              open={showTerms}
              close={closeTerms}
            />
          )}
        </div>
        <BlueButton
          type="submit"
          label={"Register Now"}
        />
      </form>
      <p className={style.registerNoAccount}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Register
