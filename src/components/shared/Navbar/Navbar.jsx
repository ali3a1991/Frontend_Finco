import React, { useState, useEffect, useContext } from "react"
import style from "./Navbar.module.scss"
import home from "../../../assets/images/home.svg"
import creditCardIcon from "../../../assets/images/credit-card.svg"
import plusCircle from "../../../assets/images/plus-circle.svg"
import pieChart from "../../../assets/images/pie-chart.svg"
import { Link, useLocation } from "react-router-dom"
import AddMenu from "./AddMenu/AddMenu.jsx"
import { DarkModeContext } from "../../../contexts/darkModeContext"

function Navbar() {
  const [homeClicked, setHomeClicked] = useState(false)
  const [transactionsClicked, setTransactionsClicked] = useState(false)
  const [plusClicked, setPlusClicked] = useState(false)
  const [reportClicked, setReportClicked] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { darkModeData } = useContext(DarkModeContext)

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
      <nav className={`${style.navbar} ${darkModeData && style.darkmode}`}>
        <section className={style.image_wrapper}>
          <div className={style.navlink}>
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
          </div>
          <div className={style.navlink}>
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
          </div>
          <div className={style.navlink}>
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
          </div>
          <div className={style.navlink}>
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
          </div>
        </section>
      </nav>
    </>
  )
}

export default Navbar
