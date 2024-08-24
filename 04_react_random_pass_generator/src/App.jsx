import { useCallback, useState, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length , setlength] = useState(8);
  const[number , setnumber] = useState(false);
  const [charAllowed , setcharAllowed] =useState(false);
  const[password , setpassword] =useState("");

  // use of ref hook
  const passwordRef = useRef(null);




// method to generate random password
const passwordGenerator = useCallback(() => {

let pass =""      //stored generated password
let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"   //data to generate password

if (number) string += "1234567890"
if (charAllowed) string += "!@#$%^&*(){}[]`~"

// loop for genreate password
for(let i=1; i<=length; i++){
  let char = Math.floor(Math.random()*string.length +1) //pass gen

  pass += string.charAt(char)

}
setpassword(pass)
// console.log("passowrd",pass);


},[length,number,charAllowed,setpassword])

// method to copy password to clip board
const copyPasswordToClipboard = useCallback(()=> {
  //use of pass ref hook
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101); //range to select for optimize

  window.navigator.clipboard.writeText(password)
},[password])



useEffect(() => {
  passwordGenerator()
},[length,number,charAllowed,passwordGenerator])

  return (
    <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-white bg-gray-700">
<h1 className="text-white text-center my-3">
   Password Generator
    </h1>

   <div className="flex shadow rounded-lg overflow-hidden mb-4">
<input type="text"
       value={password}
       className='outline-none bg-black w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}

/>
<button
onClick={copyPasswordToClipboard}
className='outline-none bg-blue-600 text-teal-50 px-3 py-0.5 shrink-0'
>copy</button>
   </div>

<div className="flex text-sm gap-x-2">

<div className="flex items-center gap-x-1">
   <input 
        type="range"
        min={4}
        max={100}
        value={length}
       className='cursor-pointer'
       onChange={(e)=>setlength(e.target.value)}
       
      />
      <label>Length:{length}</label>
  </div>

  <div className="flex items-center gap-x-1">
  <input 
        type="checkbox"
        checked={number}
       className='cursor-pointer'
       onChange={() => {
        setnumber((prev) => !prev)
       }}
       
      />
      <label>Numbers</label>
  </div>

  <div className="flex items-center gap-x-1">
  <input 
        type="checkbox"
        checked={charAllowed}
       className='cursor-pointer'
       onChange={() => {
        setcharAllowed((prev) => !prev)
       }}
       
      />
      <label>Characters</label>
  </div>

</div>
</div>

    </>
  )
}

export default App
