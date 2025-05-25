import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";
function App() {
  const [text,setText] = useState('');
  const [arr,setArr] = useState(["Shubham","Kumar","Gupta"]);
  
  return (
    <>
      <nav className="flex justify-between bg-gray-200 h-10 items-center text-xl select-none">
        <div className="px-2">Images</div>
        <div className="flex gap-4 px-2">
          <Link className="hover:text-yellow-600">Home</Link>
          <Link className="hover:text-yellow-600">About</Link>
          <Link className="hover:text-yellow-600">Blog</Link>
          <Link className="hover:text-yellow-600">Projects</Link>
        </div>
      </nav>
      <div className="flex gap-2 mt-2 px-2 flex-wrap">
        <p className="list-none">{arr.join(' ')}</p>
      </div>
      <div className="px-2 w-100">
        <input 
        className="w-100 border border-black-200 mt-2 px-1 rounded-md h-9" 
        type="text" 
        onChange={(e)=>setText(e.target.value)}
        value={text}
        />
        <button onClick={()=>{ text?arr.push(text):''; text && setArr([...arr]); setText('')}} className="block justify-self-center border border-black-500 mt-2 rounded-md p-2 hover:bg-black hover:text-white transition-normal">Insert</button>
      </div>
    </>
  );
}

export default App;
