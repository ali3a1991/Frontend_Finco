import React, { useState } from "react"
import style from "./AccountSetup.module.scss"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"

function AccountSetup() {
  const [selectedFile, setSelectedFile] = useState(null)

  const { userData, setUserData } = useContext(UserContext)

  const userID = userData._id

  console.log(userData)
  console.log(userID)

  const navigator = useNavigate()

  async function submitProfile(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    form.append("_id", userID)

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/auth/profile",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    )
    if (response.ok) {
      console.log("Registration successful!")
      const data = await response.json()
      setUserData(data)
      navigator("/home")
    } else {
      console.log("Registration failed.")
    }
  }

  const handleImageChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]))
  }

  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/\s/g, "")
    value = value.match(/.{1,4}/g)?.join(" ") || ""
    event.target.value = value
  }

  const handleExpirationDateChange = (event) => {
    let value = event.target.value
    if (value.length === 2 && !value.includes("/")) {
      value = value + "/"
    }
    event.target.value = value
  }

  return (
    <div>
      <h1>Setup your account</h1>
      <form onSubmit={submitProfile}>
        <div className={style.container}>
          {selectedFile && (
            <img
              className={style.image}
              src={selectedFile}
              alt="Profile Picture"
            />
          )}
        </div>
        <input
          type="file"
          id="img"
          name="img"
          onChange={handleImageChange}
        />
        <div>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            id="card_number"
            name="card_number"
            onChange={handleCardNumberChange}
          />
          <input
            type="text"
            id="expiration_date"
            name="expiration_date"
            placeholder="MM/YY"
            pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
            maxLength={5}
            onChange={handleExpirationDateChange}
          />
        </div>
        <button type="submit">Profile Complete </button>
      </form>
    </div>
  )
}

export default AccountSetup
