import React, { useContext } from "react"
import style from "../AddIncome/AddIncome.module.scss"
import dayjs from "dayjs"
import Header from "../../shared/Header/Header.jsx"
import CreditCard from "../../shared/CreditCard/CreditCard"
import { InputLabel, Select, MenuItem } from "@mui/material"
import { OutlinedInput } from "@mui/material"
import { InputAdornment } from "@mui/material"
import { FormControl } from "@mui/material"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import Header from "../../shared/Header/Header.jsx"
import { useState, useEffect } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext"
import { UserContext } from "../../../contexts/userContext"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"


function AddIncome() {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const { setTransactionsData } = useContext(TransactionsContext)
  const { userData } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  console.log(userData)

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      setIsLoading(false)
    }
  }, [userData])

  const cards = userData.userAllCards

  async function submitIncome(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    form.append("date", selectedDate.toString())

    form.append("transaction", "income")

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
      // console.log("Submit successful!")
      event.target.reset()
    } else {
      // console.log("Submit failed.")
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
        <section className={style.addIncome}>
          <div className={style.addIncomeHeadline}>
            <h1>Add income</h1>
          </div>
          <form
            className={style.addIncomeForm}
            onSubmit={submitIncome}>
            <select
              className={style.addIncomeFormSelect}
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
            <div className={style.addIncomeFormCard}>
              <CreditCard />
            </div>
            <div className={style.addIncomeFormInput}>
              <FormControl sx={{ m: 1, width: "90%" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  sx={{ borderRadius: "50px" }}
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
            <div className={style.addIncomeFormDate}>
              <label>Date</label>
              <MobileDateTimePicker
                className={style.addIncomeFormDatePicker}
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue)
                }}
              />
            </div>
            <div className={style.addIncomeFormBlueButton}>
              <BlueButton label="Add Income" />
            </div>
          </form>
        </section>
      </LocalizationProvider>
    </>
  )
}

export default AddIncome
