import React from "react"
import style from "./Header.module.scss"
import Avatar from "@mui/material/Avatar"
import mando from "../../../assets/images/mando.jpg"
import logo from "../../../assets/images/Logo.png"
import arrow from "../../../assets/images/arrow.svg"
import { useLocation, useNavigate } from "react-router-dom"

function Header() {
  const location = useLocation()
  const navigator = useNavigate()

  return (
    <>
      <header className={style.header}>
        {location.pathname === "/home" ||
        location.pathname === "/account-settings" ? (
          <div>
            <p className={style.welcome}>Welcome back</p>
            <h1 className={style.name}>Jonathan Doe</h1>
          </div>
        ) : location.pathname === "/add-income" ||
          location.pathname === "/add-expenses" ||
          location.pathname === "/transactions-search" ? (
          <div
            className={style.arrow_wrapper}
            onClick={() => navigator(-1)}>
            <img
              src={arrow}
              alt="Arrow"
            />
          </div>
        ) : (
          <div className={style.logo_wrapper}>
            <img
              src={logo}
              alt="Finco Logo"
            />
          </div>
        )}
        <div></div>
        <div onClick={() => navigator("/account-settings")}>
          <Avatar
            alt="Profile Avatar"
            src={mando}
            sx={{ width: "40px", height: "40px" }}
          />
        </div>
      </header>
    </>
  )
}

export default Header
