import { useState } from 'react'
import './App.css'
function App() {
  const[count,setCount] = useState(0);
  const[num,setNum] = useState("");
  return (
    <>
    <h1>Total = {count}</h1>
    <input type="text" value={num}/>
    <div class="op">
    <button onClick={()=>{setCount(Number(count)+Number(num));setNum("")}}>+</button>
      <button onClick={()=>{(count===0)?setCount(Number(num)):setCount(Number(count)-Number(num));setNum("")}}>-</button>
      <button onClick={()=>{count<1?setCount(((Number(count))+1)*((num==0)?0:Number(num))):setCount(Number(count)*((num=="")?1:Number(num)));setNum("")}}>*</button>
      <button onClick={()=>{(count==0)?setCount(Number(num)):setCount(Number(count)/(Number(num)<1?1:Number(num)));setNum("")}}>/</button>
    </div>
    <div class="elements">
      <button onClick={()=>{setNum(num+"1")}}>1</button>
      <button onClick={()=>{setNum(num+"2")}}>2</button>
      <button onClick={()=>{setNum(num+"3")}}>3</button>
      <button onClick={()=>{setNum(num+"4")}}>4</button>
      <button onClick={()=>{setNum(num+"5")}}>5</button>
      <button onClick={()=>{setNum(num+"6")}}>6</button>
      <button onClick={()=>{setNum(num+"7")}}>7</button>
      <button onClick={()=>{setNum(num+"8")}}>8</button>
      <button onClick={()=>{setNum(num+"9")}}>9</button>
      <button onClick={()=>{setNum(num.substring(0,num.length-1))}}>Delete</button>
      <button onClick={()=>{setNum(num+"0")}} >0</button>
    <button onClick={()=>{setNum("");setVisible(" ")}}>Clear</button>
    </div>
    <button id="z" onClick={()=>setCount(0)}>Reset Total</button>
    </>
  )
}

export default App
