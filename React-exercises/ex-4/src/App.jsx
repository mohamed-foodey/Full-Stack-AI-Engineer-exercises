import { useState } from 'react'



function App() {

const [on, setOn] = useState(false)

const change = () => {
  setOn(!on)
}

  return(
    <>
    <h2> The button is {on ? "ON" : "OFF" }</h2>

    <button onClick={change}> Turn {on ? "Turn ON" : "Turn OFF"}</button> 

    </>
  )
}

export default App