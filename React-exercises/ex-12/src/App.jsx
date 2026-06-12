import { useState } from "react"

const App = () => {
  const [count,setCount] = useState(0)

  const decrement = () =>{
   setCount(count - 1)

  }

  const increment = () => {
    if(setCount > 0){
      setCount(count -1)
    }
  }


  return (
    <>
    <h1>Count {count}</h1>
    <button disabled={count == 0 } onClick={decrement}>Decrement</button>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default App

