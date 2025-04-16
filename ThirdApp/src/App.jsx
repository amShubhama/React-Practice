import { useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import Counter from './components/Counter.jsx'
import LikeButton from './components/LikeButton.jsx'

function App() {

  return (
    <>
      <Form/>
      <Counter/>
      <LikeButton/>
    </>
  )
}

export default App
