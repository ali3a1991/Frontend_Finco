import React from "react"
import dayjs from "dayjs"
import { InputLabel } from "@mui/material"
import { OutlinedInput } from "@mui/material"
import { InputAdornment } from "@mui/material"
import { FormControl } from "@mui/material"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import Header from "../../shared/Header/Header.jsx"
import { useState } from "react"

function AddExpenses() {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  const cardNumber = "652e55e0b0e19f3b6a4b124d"

  async function submitExpense(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    form.append("date", selectedDate.toString())

    form.append("transaction", "expense")

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/transactions/add",
      {
        method: "POST",
        // credentials: "include",
        body: form,
      }
    )
    if (response.ok) {
      console.log("Submit successful!")
      event.target.reset()
    } else {
      console.log("Submit failed.")
    }
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDateTimePicker"]}></DemoContainer>
        <Header />
        <section>
          <h1>Add expenses</h1>
          <form onSubmit={submitExpense}>
            <select
              name="card_id"
              id="card_id">
              <option value={cardNumber}>99999999999999</option>
            </select>
            <div>
              <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="value"
                  name="value"
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
            </div>
            <div>
              <label>
                Category:
                <select
                  name="category"
                  id="category">
                  <option value="salary">Salary</option>
                  <option value="shopping">Shopping</option>
                  <option value="food&drink">Food & Drink</option>
                  <option value="insurance">Insurance</option>
                  <option value="rent">Rent</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Date & Time:
                <MobileDateTimePicker
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue)
                  }}
                />
              </label>
            </div>
            <button type="submit">Add expenses</button>
          </form>
        </section>
      </LocalizationProvider>
    </>
  )
}

export default AddExpenses
