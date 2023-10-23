import React from "react"
import style from "../../pages/Report/Report.module.scss"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import { LineChart } from "@mui/x-charts/LineChart"
import { useState, useEffect } from "react"
import TransactionFilter from "../../shared/transactionFilter/TransactionFilter.jsx"
import TransactionItem from "../../shared/transactionItem/TransactionItem.jsx"

function Report() {
  const [fetchData3, setFetchData3] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [visibleItems, setVisibleItems] = useState(10)

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

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10)
  }

  console.log(fetchData3)

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Header />
      <div>
        <h1 className={style.report_heading}>Report</h1>
        <TransactionFilter />
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
                color: "#77C7C1",
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
      </div>
      <div>
        <h3 className={style.total_heading}>Total Transactions</h3>
        <div className={style.transactions_list}>
          {fetchData3.slice(0, visibleItems).map((transaction) => (
            <TransactionItem
              key={transaction._id}
              transaction={transaction}
            />
          ))}
        </div>
      </div>
      <div
        className={style.loadmore}
        onClick={handleLoadMore}>
        load more
      </div>
      <Navbar />
    </>
  )
}

export default Report
