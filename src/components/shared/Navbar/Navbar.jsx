import React, { useState, useEffect } from "react"
import style from "./Navbar.module.scss"
import home from "../../../assets/images/home.svg"
import creditCardIcon from "../../../assets/images/credit-card.svg"
import plusCircle from "../../../assets/images/plus-circle.svg"
import pieChart from "../../../assets/images/pie-chart.svg"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [homeClicked, setHomeClicked] = useState(false)
  const [transactionsClicked, setTransactionsClicked] = useState(false)
  const [reportClicked, setReportClicked] = useState(false)

  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setHomeClicked(true)
        setTransactionsClicked(false)
        setReportClicked(false)
        break
      case "/transactions":
        setHomeClicked(false)
        setTransactionsClicked(true)
        setReportClicked(false)
        break
      case "/report":
        setHomeClicked(false)
        setTransactionsClicked(false)
        setReportClicked(true)
        break
      default:
        setHomeClicked(false)
        setTransactionsClicked(false)
        setReportClicked(false)
    }
  }, [location.pathname])

  return (
    <nav className={style.navbar}>
      <section className={style.image_wrapper}>
        <Link to={"/home"}>
          <div>
            {homeClicked ? (
              <p>Home</p>
            ) : (
              <img
                src={home}
                alt="Home Icon"
              />
            )}
          </div>
        </Link>
        <Link to={"/transactions"}>
          <div>
            {transactionsClicked ? (
              <p>Transaction</p>
            ) : (
              <img
                src={creditCardIcon}
                alt="Credit Card Icon"
              />
            )}
          </div>
        </Link>
        <div>
          <img
            src={plusCircle}
            alt="Plus Circle Icon"
          />
        </div>
        <Link to={"/report"}>
          <div>
            {reportClicked ? (
              <p>Report</p>
            ) : (
              <img
                src={pieChart}
                alt="Pie Chart Icon"
              />
            )}
          </div>
        </Link>
      </section>
    </nav>
  )
}

export default Navbar
