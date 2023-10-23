import React from "react"
import Pic from "../../../../assets/images/PictureIcon.png"
import style from "./Picture.module.scss"

function Picture() {
  return (
    <div className={style.picture}>
      <img
        src={Pic}
        alt="Picture"
      />
    </div>
  )
}

export default Picture
