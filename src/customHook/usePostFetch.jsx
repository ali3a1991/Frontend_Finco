import React, { useEffect, useState } from 'react'

function usePostFetch(rout, cardId) {
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER + rout, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ card_id: cardId }),
    })
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((data) => {
        setFetchData(data)
      })
  }, [])

  return fetchData
}

export default usePostFetch