import React, { useState } from 'react'

const LikeButton = () => {
    const [isLike,setIsLike] = useState(true);
    let style = {color:(isLike ? null :"red"),cursor:"pointer",fontSize:"100px"};
    function like(){
        console.log(isLike);
        setIsLike(!isLike);
    }
  return (
    <>
    <h1>Like the comment </h1>
    {
    isLike ? <i onClick={like} style={style} class="fa-regular fa-heart"></i> :
    <i onClick={like} style={style}  class="fa-solid fa-heart"></i>
    }
    </>
  )
}

export default LikeButton