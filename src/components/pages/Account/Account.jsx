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
import { DarkModeContext } from "../../../contexts/darkModeContext"

function Account() {
  const { userData } = useContext(UserContext)
  const { darkModeData, setDarkModeData } = useContext(DarkModeContext)

  const card = userData.userAllCards

  const handleDarkMode = () => {
    setDarkModeData((prev) => !prev)
  }

  return (
    <>
      <Header />
      <div className={`${style.account} ${darkModeData && style.darkmode}`}>
        <div className={style.accountFeather}>
          <div className={style.accountFeatherDiv}>
            <img src={Feather} />
            <p>My wallet</p>
          </div>
          <div>
            <img
              src={Arrow}
              alt=""
            />
          </div>
        </div>
        <div className={style.accountBell}>
          <div>
            <img src={Bell} />
            <p>Dark mode</p>
          </div>
          <h2
            onClick={handleDarkMode}
            className={darkModeData ? style.darkmodeBg : style.lightmodeBg}>
            <p className={style.darkmodeBtn}></p>
          </h2>
        </div>
        <div className={style.accountGear}>
          <div>
            <img src={Gear} />
            <p>Settings</p>
          </div>
          <div>
            <img
              src={Arrow}
              alt=""
            />
          </div>{" "}
        </div>
        <div className={style.accountFAQ}>
          <div>
            <img src={FAQ} />
            <p>FAQ</p>
          </div>
          <div>
            <img
              src={Arrow}
              alt=""
            />
          </div>
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
