import React from "react"
import { FormControl, OutlinedInput, InputLabel } from "@mui/material"

function InputField(props) {
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
        />
      </FormControl>
    </div>
  )
}

export default InputField
