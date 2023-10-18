import React from "react"
import { InputLabel } from "@mui/material"
import { OutlinedInput } from "@mui/material"
import { InputAdornment } from "@mui/material"
import { FormControl } from "@mui/material"
import Header from "../../shared/Header/Header.jsx"

function AddExpenses() {
  const cardNumber = "652e55e0b0e19f3b6a4b124d"

  async function submitExpense(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    form.append("transaction", "expenses")

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/transactions/add",
      {
        method: "POST",
        credentials: "include",
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
    <>
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
              Date and Time:
              <input
                type="datetime-local"
                name="datetime"
                id="datetime"
              />
            </label>
          </div>
          <button type="submit">Add expenses</button>
        </form>
      </section>
    </>
  )
}

export default AddExpenses
