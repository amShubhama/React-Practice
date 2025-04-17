import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function Todo () {

    const[task,setTask] = useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    const[newTask,setNewTask] = useState("");

    function setNew(event){
        setNewTask(event.target.value);
    }

    function setTaskNew(){
        setTask([...task,{task:newTask,id:uuidv4(),isDone:false}]);
        setNewTask("");
    }

    function deleteTask(id){
        setTask((pre)=>pre.filter((obj)=>obj.id != id));
    }
    
    function completed(id){
        setTask((pre)=>pre.map((obj)=>{
            if(obj.id==id){
                obj.isDone = true;
                return obj;
            }else{
                return obj;
            }
        })
    )}
  return (
    <>
    <h1>Hii, Shubham!</h1>

    <input 
    style={{display:"block",marginLeft:"auto",marginRight:"auto", marginBottom:"10px",width:"200px", height:"40px",fontSize:"20px"}} 
    type="text" 
    onChange={setNew}
    value={newTask}
    placeholder='Add your tasks!'/>

    <button onClick={setTaskNew}>Add Task!</button>

    {task.map((obj)=>{
        if(obj.isDone){
            return <li style={{marginTop:"15px", fontSize:"22px", textTransform:"capitalize",textDecoration:"line-through",backgroundColor:"red"}} key={obj.id}>{obj.task}
            </li>
        }else{
            return <li style={{marginTop:"15px", fontSize:"35px", textTransform:"capitalize",border:"4px solid green",color:"green"}} key={obj.id}>{obj.task}
            <div style={{display:"flex", flexDirection:"row"}}>
            <button style={{width:"200px",fontSize:"20px",height:"50px"}} onClick={()=>completed(obj.id)}>Task Completed</button>
            <button onClick={()=>deleteTask(obj.id)} style={{width:"200px",marginLeft:"auto",fontSize:"20px",height:"50px"}}>Delete</button>
            </div>
            </li>
        }
    })}
    </>
  )
}