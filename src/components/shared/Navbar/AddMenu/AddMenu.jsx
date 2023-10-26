import React, { useContext } from "react"
import style from "./AddMenu.module.scss"
import union from "../../../../assets/images/Union.svg"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../../../contexts/darkModeContext"

function AddMenu() {
  const { darkModeData } = useContext(DarkModeContext)

  return (
    <section>
      <div className={`${style.add_menu} ${darkModeData && style.darkmode}`}>
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
