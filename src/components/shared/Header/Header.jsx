import React from "react"
import style from "./Header.module.scss"
import Avatar from "@mui/material/Avatar"
import mando from "../../../assets/images/mando.jpg"
// import Logo from "../../../assets/images/Top.svg"
import { useLocation } from "react-router-dom"

function Header() {
  const path = useLocation()

  return (
    <>
      <header className={style.header}>
        <div>
          <p className={style.welcome}>Welcome back</p>
          <h1 className={style.name}>Jonathan Doe</h1>
        </div>
        <div>
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
