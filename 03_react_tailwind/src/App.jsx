import { useState } from 'react'

import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

let myobj ={
  username:"ayush",
  age:20
}

return (
    <>
     <h1
     className='bg-green-500 text-black p-4 rounded-xl mb-4'
     >
      tailwind test
     </h1>

     <Card channel="nitish" someobjet={myobj} /> 
     <Card /> 
     
    </>
  )
}

export default App
