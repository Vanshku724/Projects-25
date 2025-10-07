import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("Vansh Sharma")

  return (
    <>
     <input type="text" onChange={(event)=>setValue(event.target.value)} placeholder='Enter Your Name' /> 
     {value}
    </>
  )
}

export default App
