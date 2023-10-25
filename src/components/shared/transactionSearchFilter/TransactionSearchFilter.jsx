import React, { useRef } from "react"
import style from "../../shared/transactionSearchFilter/TransactionSearchFilter.module.scss"
import InputField from "../../shared/Input/InputField.jsx"
import searchIcon from "../../../assets/images/search.svg"

function TransactionSearchFilter({ setDateRevValue, setSearchValue }) {
  const setDateFilter = (event) => {
    setDateRevValue(event.target.value)
  }

  const searchText = (event) => {
    setSearchValue(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    )
  }

  return (
    <div>
      <div className={style.search_icon_container}>
        <img
          src={searchIcon}
          alt="Search Icon"
          className={style.search_icon}
        />
        <InputField
          onChange={searchText}
          type={"text"}
        />
      </div>
      <div className={style.date_container}>
        <InputField
          type={"date"}
          onChange={setDateFilter}
        />
      </div>
    </div>
  )
}

export default TransactionSearchFilter
