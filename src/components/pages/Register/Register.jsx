import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import TermsAndService from "./TermsAndService.jsx"

function Register() {
  const [showTerms, setShowTerms] = useState(false)

  function submitRegistration(event) {
    event.preventDefault()
  }

  function openTerms() {
    setShowTerms((prev) => !prev)
  }

  return (
    <div>
      <h1>Create an account</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
        sapien velit sed sapien.
      </p>
      <form onSubmit={submitRegistration}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
        <input
          type="checkbox"
          id="terms"
          name="terms"
          required
        />
        <label htmlFor="terms">
          Agree to our <span onClick={openTerms}>Terms and Service</span>
        </label>
        {showTerms && <TermsAndService />}
        <button type="submit">Register Now</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Register
