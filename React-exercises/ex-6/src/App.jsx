import { useState, useEffect } from "react"
function App() {

  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('Hello')

  useEffect(() => {
    document.title = name === "" ? "Welcome" : `${greeting} ${name}`;
  }, [name, greeting]);


  return (
    <div>
      <h1>Enter Your Name:</h1>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />

      <h2>Choose Your Greeting:</h2>
      <input 
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)} />

    </div>
  )
}

export default App