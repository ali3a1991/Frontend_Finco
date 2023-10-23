import React from "react"
import Header from "../../shared/Header/Header.jsx"
import Navbar from "../../shared/Navbar/Navbar.jsx"
import TransactionFilter from "../../shared/transactionFilter/TransactionFilter.jsx"
import TransactionItem from "../../shared/transactionItem/TransactionItem.jsx"
import usePostFetch from "../../../customHook/usePostFetch.jsx"

function Report() {
  const [fetchData, setFetchData] = usePostFetch(
    "api/transactions/data",
    "65326ce471fadf8e8d77211e"
  )

  return (
    <>
      <Header />
      <div>
        <h1>Report</h1>
        <TransactionFilter/>
      </div>
      <div>
        <h3>Total Transactions</h3>
        {fetchData.map(transaction => <TransactionItem
          key={transaction._id}
          transaction={transaction}
        />)}
      </div>
      <Navbar />
    </>
  )
}

export default Report
