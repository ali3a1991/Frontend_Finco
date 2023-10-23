import React from "react"
import style from "./Header.module.scss"
import Avatar from "@mui/material/Avatar"
import logo from "../../../assets/images/Logo.png"
import arrow from "../../../assets/images/arrow.svg"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"

function Header() {
  const location = useLocation()
  const navigator = useNavigate()

  const { userData } = useContext(UserContext)

  return (
    <>
      <header className={style.header}>
        {location.pathname === "/home" ||
        location.pathname === "/account-settings" ? (
          <div>
            <p className={style.welcome}>Welcome back</p>
            <h1 className={style.name}>{userData.username}</h1>
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
            <Link to="/home">
              <img
                src={logo}
                alt="Finco Logo"
              />
            </Link>
          </div>
        )}
        <div></div>
        <div onClick={() => navigator("/account-settings")}>
          <Avatar
            alt="Profile Avatar"
            src={userData.profile_image_url}
            sx={{ width: "40px", height: "40px" }}
          />
        </div>
      </header>
    </>
  )
}

export default Header
