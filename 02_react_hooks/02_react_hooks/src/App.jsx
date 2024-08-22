// Hooks........
import { useState } from 'react'



import './App.css'

function App() {
  
let [counter,setcounter] = useState(5)


  // let counter =5;

const addvalue =() => {
if (counter<20) {
  counter = counter+1;
 setcounter(counter)
}else{

  console.log("Pls select less than 20 values");
}
  
  

// setcounter(counter+1)  {...2nd method....}
}

const removevalue =() => {
  if (counter<=0) {
    setcounter(0)
    console.log("Pls select positive values");
  }else{
 setcounter(counter-1)
 }
 

}


  return (
    <>
      <h1>NItish</h1>
      <h2>counter value :{counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br/>
      <br/>
      <button
      onClick={removevalue}
      >Decrease vlue</button>
    </>
  )
}

export default App
