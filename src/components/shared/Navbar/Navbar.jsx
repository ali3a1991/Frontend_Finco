import React, { useState, useEffect } from "react"
import style from "./Navbar.module.scss"
import home from "../../../assets/images/home.svg"
import creditCardIcon from "../../../assets/images/credit-card.svg"
import plusCircle from "../../../assets/images/plus-circle.svg"
import pieChart from "../../../assets/images/pie-chart.svg"
import { Link, useLocation } from "react-router-dom"
import AddMenu from "./AddMenu/AddMenu.jsx"

function Navbar() {
  const [homeClicked, setHomeClicked] = useState(false)
  const [transactionsClicked, setTransactionsClicked] = useState(false)
  const [plusClicked, setPlusClicked] = useState(false)
  const [reportClicked, setReportClicked] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setHomeClicked(true)
        setTransactionsClicked(false)
        setPlusClicked(false)
        setReportClicked(false)
        break
      case "/transactions":
        setHomeClicked(false)
        setTransactionsClicked(true)
        setPlusClicked(false)
        setReportClicked(false)
        break
      case "/report":
        setHomeClicked(false)
        setTransactionsClicked(false)
        setPlusClicked(false)
        setReportClicked(true)
        break
      default:
        setHomeClicked(false)
        setTransactionsClicked(false)
        setPlusClicked(false)
        setReportClicked(false)
    }
  }, [location.pathname])

  return (
    <>
      {plusClicked && menuOpen && <AddMenu />}
      <nav className={style.navbar}>
        <section className={style.image_wrapper}>
          <Link
            to={"/home"}
            onClick={() => {
              setHomeClicked(true)
              setTransactionsClicked(false)
              setPlusClicked(false)
              setReportClicked(false)
            }}>
            <div>
              {homeClicked && !plusClicked ? (
                <>
                  <p className={style.nav_text}>Home</p>
                  <div className={style.nav_text_underline}></div>
                </>
              ) : (
                <img
                  src={home}
                  alt="Home Icon"
                />
              )}
            </div>
          </Link>
          <Link
            to={"/transactions"}
            onClick={() => {
              setHomeClicked(false)
              setTransactionsClicked(true)
              setPlusClicked(false)
              setReportClicked(false)
            }}>
            <div>
              {transactionsClicked && !plusClicked ? (
                <>
                  <p className={style.nav_text}>Transaction</p>
                  <div className={style.nav_text_underline}></div>
                </>
              ) : (
                <img
                  src={creditCardIcon}
                  alt="Credit Card Icon"
                />
              )}
            </div>
          </Link>
          <div
            onClick={() => {
              setPlusClicked((prev) => !prev)
              setMenuOpen((prev) => !prev)
              setHomeClicked((prev) => !prev)
            }}>
            {plusClicked ? (
              <>
                <p className={style.nav_text}>Add</p>
                <div className={style.nav_text_underline}></div>
              </>
            ) : (
              <img
                src={plusCircle}
                alt="Plus Circle Icon"
              />
            )}
          </div>
          <Link
            to={"/report"}
            onClick={() => {
              setHomeClicked(false)
              setTransactionsClicked(false)
              setPlusClicked(false)
              setReportClicked(true)
            }}>
            <div>
              {reportClicked && !plusClicked ? (
                <>
                  <p className={style.nav_text}>Report</p>
                  <div className={style.nav_text_underline}></div>
                </>
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
    </>
  )
}

export default Navbar
