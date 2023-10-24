import React, { useContext, useState, useEffect } from "react"
import style from "../Account/Account.module.scss"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import { UserContext } from "../../../contexts/userContext"
import AccountButton from "./Button/AccountButton"
import Feather from "../../../assets/images/feather.png"
import Bell from "../../../assets/images/bell.png"
import Gear from "../../../assets/images/settings.png"
import FAQ from "../../../assets/images/help-circle.png"
import { useLocation } from "react-router-dom"

function Account() {
  const { userData } = useContext(UserContext)

  const card = userData.userAllCards


  return (
    <>
      <Header />
      <div className={style.Account}>
        <AccountButton
          img={Feather}
          label={"My wallet"}
        />
        <AccountButton
          img={Bell}
          label={"Dark Mode"}
        />
        <AccountButton
          img={Gear}
          label={"Settings"}
        />
        <AccountButton
          img={FAQ}
          label={"FAQ"}
        />
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
