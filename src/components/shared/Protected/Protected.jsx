import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Protected = () => {
  const [auth, setAuth] = useState(false)

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

  return <section>{auth && <Outlet />}</section>
}

export default Protected
