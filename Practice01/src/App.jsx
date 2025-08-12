import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Counter from './component/Counter/Counter'
import BGColor from './component/BGColor/BGColor.jsx'
import PassWordGenerate from './component/PasswordGenerator/PassWordGenerate.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
    {/* <BGColor/> */}
    <PassWordGenerate/>
    </>
  )
}

export default App
