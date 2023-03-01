import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h3>Contador</h3>
    <hr />
    <h1>{count}</h1>
    <buttom 
    onClick={() => {
    setCount(count +1);
    }}
    type="buttom" 
    className="btn btn-primary"
    >+1</buttom>

  <buttom 
    onClick={() => {
    setCount(count -1);
    }}
    type="buttom" 
    className="btn btn-primary"
    >-1</buttom>

  <buttom 
    onClick={() => {
    setCount(0);
    }}
    type="buttom" 
    className="btn btn-primary"
    >0</buttom>

    
    </div>
  )
}

export default App
