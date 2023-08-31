import { useEffect } from 'react'
import './App.css'

function App() {
    useEffect(() => {
      window.location.href = "sms:9734?&body=OK"
  }, [])
  
  
  return (
    <>
    </>
  )
}

export default App
