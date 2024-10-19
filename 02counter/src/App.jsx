import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState hook

  let [counter, setCounter] = useState(15)
   //let counter = 5;

   const addValue = () => {
    if (counter<20) {
      counter = counter+1;
    setCounter(counter)
    }
 }

 const removeValue = () => { 
  if (counter>0) {
    setCounter(counter-1)
  }
  }

   

  return (
    <>
      <h1>React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
