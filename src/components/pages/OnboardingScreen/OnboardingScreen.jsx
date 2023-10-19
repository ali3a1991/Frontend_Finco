import React, { useEffect, useState } from "react"
import Logo from "../../../assets/images/Logo.png"
import style from "./OnboardingScreen.module.scss"
import { useNavigate } from "react-router-dom"

function OnboardingScreen() {
  const [imageVisible, setImageVisible] = useState(true)
  const [showHome, setShowHome] = useState(false)
  const navigator = useNavigate()

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
      {showHome && navigator("/home")}
    </div>
  )
}

export default OnboardingScreen
