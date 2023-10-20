import React, { useEffect, useState } from "react"
import Logo from "../../../assets/images/Logo.png"
import style from "./OnboardingScreen.module.scss"
import { Link, useNavigate } from "react-router-dom"
import Illustration1 from "../../../assets/images/Illustration1.png"
import BlueButton from "../../shared/BlueButtons/BlueButton.jsx"

function OnboardingScreen() {
  const [imageVisible, setImageVisible] = useState(true)
  const [showHome, setShowHome] = useState(false)
  const navigator = useNavigate()

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setImageVisible(false)

  //     setTimeout(() => {
  //       setShowHome(true)
  //     }, 1)
  //   }, 3000)
  // })

  return (
    <div>
      {/* <div className={style.splash}>
        {imageVisible && (
          <img
            src={Logo}
            alt="Logo"
            style={{ opacity: imageVisible ? 1 : 0 }}
          />
        )}
        {showHome && navigator("/home")}
      </div> */}
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
        <div className={style.splashOnboardingButtons}>
          <div>
            <BlueButton label={"Next"} />
          </div>
          <Link to="/home">Skip</Link>
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen
