import React from "react"
import { FormControl, OutlinedInput, InputLabel } from "@mui/material"

function InputField(props) {
  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/\s/g, "")
    value = value.match(/.{1,4}/g)?.join(" ") || ""
    event.target.value = value
  }

  const handleExpirationDateChange = (event) => {
    let value = event.target.value
    if (value.length === 2 && !value.includes("/")) {
      value = value + "/"
    }
    event.target.value = value
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: "80%" }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          {props.label}
        </InputLabel>
        <OutlinedInput
          sx={{ borderRadius: "50px" }}
          id={props.data}
          name={props.data}
          onChange={props.onChange}
          maxLength={props.maxLength}
          label={props.label}
        />
      </FormControl>
    </div>
  )
}

export default InputField
