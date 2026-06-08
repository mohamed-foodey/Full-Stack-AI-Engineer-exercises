import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleSetTime = () => {
    const time = Number(inputValue);

    if (time > 0) {
      setSeconds(time);
      setIsRunning(false);
    }
  };

  const handleStart = () => {
    if (seconds > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setInputValue("");
  };

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  return (
    <div>
      <h1>Countdown Timer</h1>

      <label>Set Time (seconds): </label>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSetTime}>Set Time</button>

      <h2>Time Left: {seconds} seconds</h2>

      <button
        onClick={handleStart}
        disabled={seconds === 0 || isRunning}
      >
        Start
      </button>

      <button
        onClick={handleStop}
        disabled={seconds === 0 || !isRunning}
      >
        Stop
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;