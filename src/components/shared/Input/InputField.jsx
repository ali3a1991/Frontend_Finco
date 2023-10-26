import React, { useContext } from "react"
import { FormControl, OutlinedInput, InputLabel } from "@mui/material"
import { DarkModeContext } from "../../../contexts/darkModeContext"

function InputField(props) {
  const { darkModeData } = useContext(DarkModeContext)
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
      <FormControl
        sx={{
          m: 1,
          width: "90%",
          background: `${darkModeData && "#dddddd"}`,
          borderRadius: `${darkModeData && "30px"}`,
        }}>
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
          type={props.type}
        />
      </FormControl>
    </div>
  )
}

export default InputField
