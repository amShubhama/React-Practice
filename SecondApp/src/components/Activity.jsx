import React from 'react'

const Activity = ({userName,textColor}) => {
    let styles = {color:textColor, fontSize:"30px", border:"2px solid black", padding:"2px 2px 2px 2px", borderRadius:"4px"};
  return (
    <>
    <h3>Hello <b style={styles}>{userName}</b></h3>
    </>
  )
}

export default Activity;