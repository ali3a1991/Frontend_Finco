import React from "react"
import { Link } from "react-router-dom"

function Login() {
  async function submitLogin(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/auth/login",
      {
        method: "POST",
        body: form,
      }
    )
    if (response.ok) {
      console.log("Login successful!")
      console.log(response)
    } else {
      console.log("Login failed.")
    }
  }

  return (
    <div>
      <h1>Welcome back</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adip sicing elit, sed do
        eiusmod.
      </p>
      <form onSubmit={submitLogin}>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have any account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  )
}

export default Login
