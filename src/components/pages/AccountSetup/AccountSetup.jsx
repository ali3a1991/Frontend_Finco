import React, { useState } from "react"
import styles from "./AccountSetup.module.scss"

function AccountSetup() {
  const [selectedFile, setSelectedFile] = useState(null)

  async function submitProfile(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/auth/profile",
      {
        method: "POST",
        body: form,
      }
    )
    if (response.ok) {
      console.log("Registration successful!")
      console.log(response)
    } else {
      console.log("Registration failed.")
    }
  }

  const handleImageChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div>
      <h1>Setup your account</h1>
      <form onSubmit={submitProfile}>
        <div className={styles.container}>
          {selectedFile && (
            <img
              className={styles.image}
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
          />
          <input
            type="text"
            id="expiration_date"
            name="expiration_date"
            placeholder="Expiration Date"
          />
        </div>
        <button type="submit">Profile Complete </button>
      </form>
    </div>
  )
}

export default AccountSetup
