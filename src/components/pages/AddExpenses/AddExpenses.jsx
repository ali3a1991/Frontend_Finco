import React from "react"
import { InputLabel } from "@mui/material"
import { OutlinedInput } from "@mui/material"
import { InputAdornment } from "@mui/material"
import { FormControl } from "@mui/material"

function AddExpenses() {
  async function submitExpense(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/transactions/add",
      {
        method: "POST",
        body: form,
      }
    )
    if (response.ok) {
      console.log("Submit successful!")
      console.log(response)
    } else {
      console.log("Submit failed.")
    }
  }

  return (
    <section>
      <h1>Add expenses</h1>
      <form onSubmit={submitExpense}>
        <div>
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
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
            Date:
            <input
              type="date"
              name="date"
              id="date"
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="time"
              name="time"
              id="time"
            />
          </label>
        </div>
        <button type="submit">Add expenses</button>
      </form>
    </section>
  )
}

export default AddExpenses
