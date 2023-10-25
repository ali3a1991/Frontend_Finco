import React from "react"

function AccountButton(props) {
  return (
    <div>
      <img
        src={props.img}
        alt=""
      />
      <p>{props.label}</p>
      <p></p>
    </div>
  )
}

export default AccountButton
