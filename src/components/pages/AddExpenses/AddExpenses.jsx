import React, { useContext } from "react"
import dayjs from "dayjs"
import Header from "../../shared/Header/Header.jsx"
import BlueButton from "../../shared/BlueButtons/BlueButton.jsx"
import style from "./AddExpense.module.scss"
import CreditCard from "../../shared/CreditCard/CreditCard.jsx"
import { InputLabel } from "@mui/material"
import { OutlinedInput } from "@mui/material"
import { InputAdornment } from "@mui/material"
import { FormControl } from "@mui/material"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { useState, useEffect } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext.jsx"
import { UserContext } from "../../../contexts/userContext.jsx"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
import { DarkModeContext } from "../../../contexts/darkModeContext.jsx"

function AddExpenses() {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const { setTransactionsData } = useContext(TransactionsContext)
  const { userData } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const { darkModeData } = useContext(DarkModeContext)

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
    form.append("card_id", userData.userAllCards[0]._id)
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
      event.target.reset()
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
    <div className={style.addExpensePage}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDateTimePicker"]}></DemoContainer>
        <Header />
        <section
          className={`${style.addExpense} ${darkModeData && style.darkmode}`}>
          <div className={style.addExpenseHeadline}>
            <h1>Add expense</h1>
          </div>
          <form
            className={style.addExpenseForm}
            onSubmit={submitExpense}>
            {/* <select
              className={style.addExpenseFormSelect}
              name="card_id"
              id="card_id">
              {cards.map((card) => (
                <option
                  key={card._id}
                  value={card._id}>
                  {card.card_number}
                </option>
              ))}
            </select> */}
            <div className={style.addExpenseFormCard}>
              <CreditCard />
            </div>
            <div className={style.addExpenseFormInput}>
              <FormControl
                sx={{
                  m: 1,
                  width: "90%",
                  background: `${darkModeData && "#dddddd"}`,
                  borderRadius: `${darkModeData && "30px"}`,
                }}>
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
            <div className={style.addExpenseFormCategory}>
              <label>Category</label>
              <select
                className={style.addExpenseFormCategorySelect}
                name="category"
                id="category">
                <option value="Salary">Salary</option>
                <option value="Shopping">Shopping</option>
                <option value="Food & Drink">Food & Drink</option>
                <option value="Insurance">Insurance</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
            <div className={style.addExpenseFormDate}>
              <label>Date</label>
              <MobileDateTimePicker
                className={style.addExpenseFormDatePicker}
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue)
                }}
              />
            </div>
            <div className={style.addExpenseFormBlueButton}>
              <BlueButton label="Add Expense" />
            </div>
          </form>
        </section>
      </LocalizationProvider>
    </div>
  )
}

export default AddExpenses
