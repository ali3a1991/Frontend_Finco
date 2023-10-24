import React, { useContext, useState, useEffect } from "react"
import style from "../Account/Account.module.scss"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import { UserContext } from "../../../contexts/userContext"
import { useLocation } from "react-router-dom"

function Account() {
  const { userData } = useContext(UserContext)

  const card = userData.userAllCards

  return (
    <>
      <Header />
      <div>
        <h1>Account</h1>
        <select
          name=""
          id="">
          {card?.map((item) => (
            <option
              key={item._id}
              value={item._id}>
              {item.card_number}
            </option>
          ))}
        </select>
      </div>
      <Navbar />
    </>
  )
}

export default Account
