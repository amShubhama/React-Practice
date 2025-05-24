import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [type, setType] = useState('password');
  const [show,setShow] = useState('Show password');
  const showPassword = ()=>{
    if(type==='password'){
      setType('text');
      setShow('Hide password');
    } else {
      setType('password');
      setShow('Show password');
    }
  }
  return (
    <>
      <h1>This is Password Setup</h1>
      <div>
        <input 
        type={type}
        />
        <span onClick={showPassword}>{show}</span>
      </div>
    </>
  )
}

export default App
