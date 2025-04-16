import React from 'react'
function formSubmit(event){
    event.preventDefault();
    console.log("Form is submitted")
}
const Form = () => {
  return (
    <form onSubmit={formSubmit}>
        <input type="text" placeholder='Write something'/>
        <button type='Submit'>Submit</button>
    </form>
  )
}

export default Form