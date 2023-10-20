import React from "react"
import style from "./BlueButton.module.scss"

function BlueButton(props) {
  return (
    <div>
      <button className={style.blueButton}>{props.label}</button>
    </div>
  )
}

export default BlueButton
