import React, { useState } from 'react'

const LudoGame = () => {
    const[moves, setMoves] = useState({blue:0,yellow:0,green:0,red:0})
    function setBlueMove(){
        moves.blue += 1;
        setMoves({...moves});
    }
    function setYellowMove(){
        moves.yellow += 1;
        setMoves({...moves});
    }
    function setGreenMove(){
        moves.green += 1;
        setMoves({...moves});
    }
    function setRedMove(){
        setMoves({...moves, red:moves.red+1});
    }
  return (
    <>
    <h1>Game start!</h1>
    <div class="b">
        <p>Blue moves = {moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={setBlueMove}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{backgroundColor:"yellow", color:"black"}} onClick={setYellowMove}>+1</button>
        <p>Green moves = {moves.green}</p>
        <button style={{backgroundColor:"Green"}} onClick={setGreenMove}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={setRedMove}>+1</button>
    </div>
    </>
  )
}

export default LudoGame