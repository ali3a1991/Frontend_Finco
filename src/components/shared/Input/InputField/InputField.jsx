import React from "react"
import style from "./InputField.module.scss"
import { FormControl, OutlinedInput, InputLabel } from "@mui/material"

function EMail(props) {
  return (
    <div className={style.EMail}>
      <FormControl sx={{ m: 1, width: "300px" }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          {props.label}
        </InputLabel>
        <OutlinedInput
          sx={{ borderRadius: "25px" }}
          id="value"
          name="value"
          label="E-Mail"
        />
      </FormControl>
    </div>
  )
}

export default EMail
