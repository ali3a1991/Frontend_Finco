import React from "react"
import style from "./AddMenu.module.scss"
import union from "../../../../assets/images/Union.svg"
import { Link } from "react-router-dom"

function AddMenu() {
  return (
    <section>
      <div className={style.add_menu}>
        <div className={style.menu_wrapper}>
          <img
            src={union}
            alt="Menu with two Links"
          />
          <Link
            className={style.income_link}
            to={"/add-income"}>
            Income
          </Link>
          <div className={style.menu_line}></div>
          <Link
            className={style.expenses_link}
            to={"/add-expenses"}>
            Expenses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AddMenu
