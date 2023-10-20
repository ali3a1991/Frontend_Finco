import React, { useEffect, useState } from "react"
import style from "./OnboardingTutorial.module.scss"
import { Link } from "react-router-dom"
import Illustration2 from "../../../assets/images/Illustration2.png"
import BlueButton from "../../shared/BlueButtons/BlueButton.jsx"

function OnboardingTutorial() {
  return (
    <div>
      <div className={style.OnboardingTutorial}>
        <img
          className={style.OnboardingTutorialCard}
          src={Illustration2}
          alt="Illustration2"
        />
        <div className={style.OnboardingTutorialText}>
          <h1>Analyze your spending</h1>
          <p>
            Analyze expenditures for informed financial decision-making with
            Finco's powerful tools
          </p>
        </div>
        <div className={style.OnboardingTutorialButtons}>
          <div>
            <BlueButton label={"Next"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingTutorial
