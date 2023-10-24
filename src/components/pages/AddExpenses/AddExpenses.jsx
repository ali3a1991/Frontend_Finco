import React, { useContext } from "react"
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
import { useState, useEffect } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext.jsx"
import { UserContext } from "../../../contexts/userContext.jsx"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

function AddExpenses() {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const { setTransactionsData } = useContext(TransactionsContext)
  const { userData } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      setIsLoading(false)
    }
  }, [userData])

  const cards = userData.userAllCards

  async function submitExpense(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    form.append("date", selectedDate.toString())

    form.append("transaction", "expense")

    const response = await fetch(
      import.meta.env.VITE_SERVER + "api/transactions/add",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    )
    if (response.ok) {
      const data = await response.json()
      setTransactionsData(data)
      console.log("Submit successful!")
      event.target.reset()
    } else {
      console.log("Submit failed.")
    }
  }

  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <CircularProgress />
    </Box>
  ) : (
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
              {cards.map((card) => (
                <option
                  key={card._id}
                  value={card._id}>
                  {card.card_number}
                </option>
              ))}
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
                  <option value="Salary">Salary</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Food & Drink">Food & Drink</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Rent">Rent</option>
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
