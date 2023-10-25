import React, { useContext, useState, useEffect } from "react"
import style from "../Account/Account.module.scss"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import { UserContext } from "../../../contexts/userContext"
import Feather from "../../../assets/images/feather.png"
import Bell from "../../../assets/images/bell.png"
import Gear from "../../../assets/images/settings.png"
import FAQ from "../../../assets/images/help-circle.png"
import Arrow from "../../../assets/images/arrow-right.svg"
import { useLocation } from "react-router-dom"
import LogoutButton from "./Button/LogoutButton/LogoutButton.jsx"

function Account() {
  const { userData } = useContext(UserContext)

  const card = userData.userAllCards

  return (
    <>
      <Header />
      <div className={style.account}>
        <div className={style.accountFeather}>
          <div className={style.accountFeatherDiv}>
            <img src={Feather} />
            <p>My wallet</p>
          </div>
          <img
            src={Arrow}
            alt=""
          />
        </div>
        <div className={style.accountBell}>
          <div>
            <img src={Bell} />
            <p>Dark mode</p>
          </div>
          <img
            src={Arrow}
            alt=""
          />{" "}
        </div>
        <div className={style.accountGear}>
          <div>
            <img src={Gear} />
            <p>Settings</p>
          </div>
          <img
            src={Arrow}
            alt=""
          />{" "}
        </div>
        <div className={style.accountFAQ}>
          <div>
            <img src={FAQ} />
            <p>FAQ</p>
          </div>
          <img
            src={Arrow}
            alt=""
          />
        </div>
        <div className={style.accountLogout}>
          <LogoutButton />
        </div>

        {/* <select
          name=""
          id="">
          {card?.map((item) => (
            <option
              key={item._id}
              value={item._id}>
              {item.card_number}
            </option>
          ))}
        </select> */}
      </div>
      <Navbar />
    </>
  )
}

export default Account
