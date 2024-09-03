import React, { useEffect, useState } from 'react'

// hooks is for loader to render from main.jsx
import { useLoaderData } from 'react-router-dom'

function Github() {

// assign the userloaderdata to load data from main.jsx

const data = useLoaderData()


 // --------------------  2nd method to fetch data -------------------   

// const [data , setdata] = useState([])

// useEffect(()=>{
// fetch("https://api.github.com/users/hiteshchoudhary")
// .then(responce => responce.json())
// .then (data=> {
//     console.log(data);
//     setdata(data)
    
// })
// })

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
    <img src={data.avatar_url} alt='Git picture' width={300} />
    <div class name='text-center m-4 bg-green-700 text-white p-4 text-3xl'> Bio : {data.bio}  </div>
    </div>
  )
}

export default Github

// cearte a method to fetch the data by using with loader trough main.jsx

export const githubinfo = async()=>{
    const responce = await fetch('https://api.github.com/users/Nitish7040')
    return responce.json()
}
