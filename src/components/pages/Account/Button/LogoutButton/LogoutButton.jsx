import React from "react"
import style from "./LogoutButton.module.scss"
import LogoutIcon from "../../../../../assets/images/logout.png"
import Arrow from "../../../../../assets/images/arrow-right.svg"

function LogoutButton() {
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
        className={style.logoutButton}
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
