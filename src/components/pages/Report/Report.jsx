import React from "react"
import style from "../../pages/Report/Report.module.scss"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import { LineChart } from "@mui/x-charts/LineChart"
import { useState, useEffect } from "react"

function Report() {
  const [fetchData3, setFetchData3] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER + "api/transactions/data", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ card_id: "65326ce471fadf8e8d77211e" }),
    })
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((data) => {
        setFetchData3(data)
        setIsLoading(false)
      })
  }, [])

  console.log(fetchData3)

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Header />
      <div>
        <h1>Report</h1>
      </div>
      <div className={style.graph_container}>
        <LineChart
          width={500}
          height={300}
          series={[
            {
              data: fetchData3.map((item) => item.value),
              label: "Transaction Value",
              area: true,
              showMark: false,
              color: "#FB2467",
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: fetchData3.map((item) =>
                new Date(item.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              ),
            },
          ]}
          sx={{
            ".MuiLineElement-root": {
              display: "none",
            },
          }}
        />
      </div>
      <Navbar />
    </>
  )
}

export default Report
