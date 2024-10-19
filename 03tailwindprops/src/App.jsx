import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {

  }

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-400 p-4 rounded-xl">
      Hello world!
    </h1>
    <Card btnText="Hello Name"/><br />
    <Card />
    </>
  )
}

export default App
