import { useState, } from "react";
import $ from 'jquery';
function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <p>Count: {count}</p>
        <input type="text" id="number" name="fname"></input>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={() => setCount((c) => c *2)}>x2</button>
        <button onClick={() => setCount((c) => c/2)}>/2</button>
        <button onClick={() => setCount((c) => c+ Number($("#number").val())) }> + value from input</button>
      </>
    );
  }

  export default Counter;