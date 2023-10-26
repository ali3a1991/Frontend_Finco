import React, { useContext, useEffect, useState } from "react"
import Logo from "../../../assets/images/Logo.png"
import style from "./OnboardingScreen.module.scss"
import { Link, useNavigate } from "react-router-dom"
import Illustration1 from "../../../assets/images/Illustration1.png"
import BlueButton from "../../shared/BlueButtons/BlueButton.jsx"
import { DarkModeContext } from "../../../contexts/darkModeContext"

function OnboardingScreen() {
  const [imageVisible, setImageVisible] = useState(true)
  const [showHome, setShowHome] = useState(false)
  const { darkModeData } = useContext(DarkModeContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(false)
      setTimeout(() => {
        setShowHome(true)
      }, 1)
    }, 2700)
  })

  return (
    <div className={style.onboarding}>
      {imageVisible ? (
        <div className={style.splash}>
          <img
            src={Logo}
            alt="Logo"
            style={{ opacity: imageVisible ? 1 : 0 }}
          />
        </div>
      ) : showHome ? (
        <div className={style.splashOnboarding}>
          <img
            className={style.splashOnboardingCard}
            src={Illustration1}
            alt="Illustration1"
          />
          <div className={style.splashOnboardingText}>
            <h1>Track your spend and income</h1>
            <p>
              Effortlessly monitor spending and earnings with Finco's
              user-friendly onboarding
            </p>
          </div>
          <div
            className={`${style.splashOnboardingButtons} ${
              darkModeData && style.darkmode
            }`}>
            <Link to="/onboarding">
              <BlueButton label={"Next"} />
            </Link>
            <Link
              to="/register"
              className={style.skip}>
              Skip
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default OnboardingScreen
