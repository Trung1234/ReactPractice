import React, { useState } from 'react';

 function GradConverter(){
    const [temp, updateTemp] = useState({ f: 1, c: 0 })
  
    const updateC = ev => updateTemp({
      c: ev.target.value,
      f: (ev.target.value * 9 / 5 + 32)
    })
    
    const updateF = ev => updateTemp({
      c: ((ev.target.value - 32) * 5 / 9),
      f: ev.target.value
    })
  
    return(
      <div id="container">
        <div id="box1">
          <h1>Celsius</h1>
          <input
              type = "number"
              value = {temp.c}
              onChange = {updateC} >
            </input>
        </div>
        <div id="box2">
            <h1>Fahrenheit</h1>
            <input
              type = "number" 
              value = {temp.f} 
              onChange = {updateF}>
            </input>
            </div>
      </div>
    )
  }

  export default GradConverter