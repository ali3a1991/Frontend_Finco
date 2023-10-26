import React from "react"
import style from "./LogoutButton.module.scss"
import LogoutIcon from "../../../../../assets/images/logout.png"
import Arrow from "../../../../../assets/images/arrow-right.svg"
import { useContext } from "react"
import { UserContext } from "../../../../../contexts/userContext.jsx"
import { useNavigate } from "react-router-dom"
import { DarkModeContext } from "../../../../../contexts/darkModeContext"

function LogoutButton() {
  const { setUserData } = useContext(UserContext)
  const { darkModeData } = useContext(DarkModeContext)

  const navigator = useNavigate()

  const logout = async () => {
    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/auth/logout",
      {
        credentials: "include",
      }
    )
    if (response.ok) {
      setUserData([])
      navigator("/login")
    }
  }

  return (
    <div>
      <button
        className={`${style.logoutButton} ${darkModeData && style.darkmode}`}
        onClick={logout}>
        <div>
          <img
            src={LogoutIcon}
            alt=""
          />
          <p>Logout</p>
        </div>
        <img
          src={Arrow}
          alt=""
        />
      </button>
    </div>
  )
}

export default LogoutButton
