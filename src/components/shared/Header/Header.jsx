import React from "react"
import style from "./Header.module.scss"
import Avatar from "@mui/material/Avatar"
import logo from "../../../assets/images/Logo.png"
import logopart1 from '../../../assets/images/logopart1.png'
import logopart2 from '../../../assets/images/logopart2.png'
import logopart3 from '../../../assets/images/logopart3.png'
import arrow from "../../../assets/images/arrow.svg"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext.jsx"
import { DarkModeContext } from "../../../contexts/darkModeContext"

function Header() {
  const location = useLocation()
  const navigator = useNavigate()
  const { darkModeData } = useContext(DarkModeContext)
  const { userData } = useContext(UserContext)

  return (
    <>
      <header className={`${style.header} ${darkModeData && style.darkmode}`}>
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
          <Link
            to="/home"
            className={style.logoLink}>
              <div>
                <img src={logopart1} alt="" />
                <img src={logopart2} alt="" />
                <img src={logopart3} alt="" />
              </div>
          </Link>
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
