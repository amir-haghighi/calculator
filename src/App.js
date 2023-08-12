import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function operation(e, op) {
    e.preventDefault();
    inputRef.current.focus();
    if (inputRef.current.value === "") {
      inputRef.current.placeholder = "please enter a number";
      return;
    } else {
      op();
      inputRef.current.value = "";
    }
  }
  function plus() {
    setResult(result + +inputRef.current.value);
  }
  function minus() {
    setResult(result - Number(inputRef.current.value));
  }
  function times() {
    setResult(result * Number(inputRef.current.value));
  }
  function divide() {
    setResult(result / Number(inputRef.current.value));
  }
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.focus();
    inputRef.current.value = "";
  }
  function resetResult(e) {
    e.preventDefault();
    inputRef.current.focus();
    setResult(0);
  }
  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <h2 ref={resultRef}>{result}</h2>
        <input pattern="[0-9]" ref={inputRef} type="number" placeholder="" />
        <button onClick={(e) => operation(e, plus)}>add</button>
        <button onClick={(e) => operation(e, minus)}>subtract</button>
        <button onClick={(e) => operation(e, times)}>multiply</button>
        <button onClick={(e) => operation(e, divide)}>divide</button>
        <button onClick={resetInput}>reset Input</button>
        <button onClick={resetResult}>reset Result</button>
      </form>
    </div>
  );
}

export default App;
