import React, { useContext } from "react"
import style from "../Account/Account.module.scss"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import { UserContext } from "../../../contexts/userContext"

function Account() {
  const {userData} = useContext(UserContext)
  const cards = userData.userAllCards
  console.log(cards)

  return (
    <>
      <Header />
      <div>
        <h1>Account</h1>
        <select name="" id="">
          {cards.map(item => <option key={item._id} value={item._id}>{item.card_number}</option>)}
        </select>
      </div>
      <Navbar />
    </>
  )
}

export default Account
