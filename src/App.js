import './App.css';
import React from 'react'


function App() {
  var x=8;
  function updatestate(){
      x=12;
     // console.log(x)
  }
  console.log(x)
  return (
    <div>
      <h1>Learning state in state component {x}</h1>
      <button onClick={updatestate}>click me</button>
    </div>
  )
}

export default App
