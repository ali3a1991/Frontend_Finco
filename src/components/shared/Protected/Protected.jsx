import { useContext, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../../../contexts/userContext"
import { TransactionsContext } from "../../../contexts/transactionsContext"

const Protected = () => {
  const [auth, setAuth] = useState(false)
  const { userData, setUserData } = useContext(UserContext)
  const { setTransactionsData } = useContext(TransactionsContext)

  const navigator = useNavigate()

  useEffect(() => {
    const validateToken = async () => {
      const response = await fetch(
        import.meta.env.VITE_SERVER + "api/auth/validate",
        {
          credentials: "include",
        }
      )
      if (!response.ok) navigator("/login")
      else setAuth(true)
    }
    validateToken()
  }, [])

  useEffect(() => {
    const reload = async () => {
      const response = await fetch(
        import.meta.env.VITE_SERVER + "api/auth/get",
        {
          credentials: "include",
        }
      )
      const data = await response.json()
      const res = await fetch(
        import.meta.env.VITE_SERVER + "api/transactions/data",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ card_id: data.userAllCards[0]._id }),
        }
      )
      const trans = await res.json()
      setUserData(data)
      setTransactionsData(trans)
    }
    reload()
  }, [])

  return <section>{auth && <Outlet />}</section>
}

export default Protected
