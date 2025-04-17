import { useState } from 'react'
import './App.css'
import LudoGame from './components/LudoGame'
import Todo from './components/Todo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Todo/>
    </>
  )
}

export default App
