import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    useEffect(() => {
      window.open("sms:+251939858566")
  }, [])
  
  
  return (
    <>
    </>
  )
}

export default App
