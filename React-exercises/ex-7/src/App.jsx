import { useEffect, useState } from "react"
function App(){
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
    })

      useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div>
      <h1>Mouse X: {mousePosition.x} </h1>
      <h1>Mouse Y: {mousePosition.y} </h1>
    </div>
  )
}

export default App