import React, { useContext } from "react"
import dayjs from "dayjs"
import Header from "../../shared/Header/Header.jsx"
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
import { useState } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext.jsx"
import { UserContext } from "../../../contexts/userContext.jsx"
import BlueButton from "../../shared/BlueButtons/BlueButton.jsx"

function AddExpenses() {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const { setTransactionsData } = useContext(TransactionsContext)
  const { userData } = useContext(UserContext)
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
        // credentials: "include",
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

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDateTimePicker"]}></DemoContainer>
        <Header />
        <section className={style.addExpense}>
          <div className={style.addExpenseHeadline}>
            <h1>Add expense</h1>
          </div>
          <form
            className={style.addExpenseForm}
            onSubmit={submitExpense}>
            <select
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
            </select>
            <div className={style.addExpenseFormCard}>
              <CreditCard />
            </div>
            <div className={style.addExpenseFormInput}>
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
            <div className={style.addExpenseFormCategory}>
              <label>Category</label>
              <select
                className={style.addExpenseFormCategorySelect}
                name="category"
                id="category">
                <option value="salary">Salary</option>
                <option value="shopping">Shopping</option>
                <option value="food&drink">Food & Drink</option>
                <option value="insurance">Insurance</option>
                <option value="rent">Rent</option>
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
    </>
  )
}

export default AddExpenses
