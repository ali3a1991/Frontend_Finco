import React from "react"
import limit from "../../../../assets/images/limit.svg"
import style from "./Limit.module.scss"

function Limit() {
  return (
    <div className={style.limit}>
      <img
        src={limit}
        alt=""
      />
    </div>
  )
}

export default Limit
