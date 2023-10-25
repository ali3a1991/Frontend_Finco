import React from "react"
import style from "../../pages/Report/Report.module.scss"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import { LineChart } from "@mui/x-charts/LineChart"
import { useState, useEffect } from "react"
import TransactionFilter from "../../shared/transactionFilter/TransactionFilter.jsx"
import TransactionItem from "../../shared/transactionItem/TransactionItem.jsx"
import { useContext } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext.jsx"

function Report() {
  const { transactionsData } = useContext(TransactionsContext)
  const [visibleItems, setVisibleItems] = useState(10)

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10)
  }

  const currentMonth = new Date()
  const startDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  )
  const endDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  )

  const daysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  return (
    <>
      <div className={style.report_container}>
        <Header />
        <div>
          <h1 className={style.report_heading}>Report</h1>
          <TransactionFilter />
          <div className={style.graph_container}>
            {transactionsData?.length === 0 ? (
              <LineChart
                width={500}
                height={300}
                series={[
                  {
                    data: Array.from(
                      { length: daysInMonth(new Date()) },
                      () => 0
                    ),
                    label: "Transaction Value",
                    area: false,
                    showMark: false,
                    color: "#5B81B9",
                  },
                ]}
                xAxis={[
                  {
                    scaleType: "point",
                    data: Array.from(
                      { length: daysInMonth(new Date()) },
                      (_, i) =>
                        `${i + 1}-${new Date().toLocaleString("default", {
                          month: "short",
                        })}-${new Date().getFullYear()}`
                    ),
                  },
                ]}
                sx={{
                  ".MuiLineElement-root": {
                    display: "none",
                  },
                }}
              />
            ) : (
              <LineChart
                width={500}
                height={300}
                series={[
                  {
                    data: transactionsData
                      ?.filter((item) => {
                        const itemDate = new Date(item.date)
                        return itemDate >= startDate && itemDate <= endDate
                      })
                      ?.map((item) => item.value),
                    label: "Transaction Value",
                    area: true,
                    showMark: false,
                    color: "#5B81B9",
                  },
                ]}
                xAxis={[
                  {
                    scaleType: "point",
                    data: transactionsData
                      ?.filter((item) => {
                        const itemDate = new Date(item.date)
                        return itemDate >= startDate && itemDate <= endDate
                      })
                      ?.reverse()
                      ?.map(
                        (item) =>
                          `${new Date(item.date).getDate()}-${new Date(
                            item.date
                          ).toLocaleString("default", {
                            month: "short",
                          })}-${new Date(item.date).getFullYear()}`
                      ),
                  },
                ]}
                sx={{
                  ".MuiLineElement-root": {
                    display: "none",
                  },
                }}
              />
            )}
          </div>
        </div>
        <div>
          <h3 className={style.total_heading}>Total Transactions</h3>
          {transactionsData.length === 0 && (
            <p className={style.no_transactions}>No Transactions</p>
          )}
          <div className={style.transactions_list}>
            {transactionsData
              ?.filter((transaction) => {
                const transactionDate = new Date(transaction.date)
                const currentDate = new Date()
                return (
                  transactionDate.getMonth() === currentDate.getMonth() &&
                  transactionDate.getFullYear() === currentDate.getFullYear()
                )
              })
              ?.slice(0, visibleItems)
              ?.map((transaction) => (
                <TransactionItem
                  key={transaction._id}
                  transaction={transaction}
                />
              ))}
          </div>
        </div>
        {visibleItems < transactionsData.length && (
          <div
            className={style.loadmore}
            onClick={handleLoadMore}>
            load more
          </div>
        )}
      </div>
      <Navbar />
    </>
  )
}

export default Report
