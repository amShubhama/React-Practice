import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    function countt(){
        setCount(count+1);
    }
  return (
    <button onClick={countt}>Count {count}</button>
  )
}

export default Counter