import React, { useEffect, useState } from "react"
import Logo from "../../../assets/images/Logo.png"
import style from "./OnboardingScreen.module.scss"
import { Opacity } from "@mui/icons-material"
import Home from "../Home/Home.jsx"

function OnboardingScreen() {
  const [imageVisible, setImageVisible] = useState(true)
  const [showHome, setShowHome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(false)

      setTimeout(() => {
        setShowHome(true)
      }, 1)
    }, 3000)
  })

  return (
    <div className={style.splash}>
      {imageVisible && (
        <img
          src={Logo}
          alt="Logo"
          style={{ opacity: imageVisible ? 1 : 0 }}
        />
      )}
      {showHome && <Home />}
    </div>
  )
}

export default OnboardingScreen
