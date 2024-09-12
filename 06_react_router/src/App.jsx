import { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
<Header/>
<Home/>
<Footer/>

    </>
  )
}

export default App
