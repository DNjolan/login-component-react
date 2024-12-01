import Login from "./components/Login"
import Home from "./components/Home"
import { useState } from "react"

export default function App () {
  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = () => {
    setIsLogin(true)
  }

  return(
    <>
    {isLogin? (<Home />): (<Login onLogin={handleLogin}/>)}
    </>
  )
}
