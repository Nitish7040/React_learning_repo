import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import AuthSevice from './Appwrite/auth'
import {login ,logout} from "./Store/authSlice"

import './App.css'

function App() {
  const [loading ,setloading] = useState(true)
  const dispatch = useDispatch()

  // use useeffect to ask login is loggedin or not..
  useEffect(() =>{
    AuthSevice.getcurrentuser()
    .then( (userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally( () => setloading(false))
  },[])

  
  /// conditional rendering use
  // return !loading ? ( ) : (null)

return !loading ? (
  <div className='min-h-screen'>
test 
  </div>
):null
}

export default App
