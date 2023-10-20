import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import TermsAndService from "./TermsAndService.jsx"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"

function Register() {
  const [showTerms, setShowTerms] = useState(false)

  const { userData, setUserData } = useContext(UserContext)

  console.log(userData)

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
    <div>
      <h1>Create an account</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adip sicing elit, sed do
        eiusmod.
      </p>
      <form onSubmit={submitRegistration}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
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
        <button type="submit">Register Now</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Register
