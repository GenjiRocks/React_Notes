import React, { useState } from 'react'

function Example({age,sub}) {

  // Calling Hooks
  const [concept,setConcept] = useState("reactjs")
  

  console.log(age,sub);

  // Button function without arg
  const buttonClick = ()=>{
    alert('Button clicked')
  }

  // Function with arguments
  const addUser = (uname)=>{
    alert(`${uname} is the Username`)
  }

  // Function for the input field
  const getName =(e)=>{
    console.log(e.target.value);
  }

  return (
    <>
     <div>Example</div>
     {sub==='React'?
        <p className='text-danger'>data shared is : {sub}</p> :
        <p className='text-primary'>data shared is not react</p>
     }
     {/* <p>Data shared is(age) {age}{sub}</p> */}

     <button className='btn btn-primary me-2' onClick={buttonClick}>Click</button>
     <button className='btn btn-success' onClick={()=>{addUser('Ashwin')}}>ADD USER</button>

      <div className='d-flex mt-4'>
        <input type="text" placeholder='Enter the text' className='form-control w-25' onChange={(e)=>getName(e)}/>
      </div>

      <p>Hook value is : {concept}</p>
      <button className='btn btn-danger' onClick={()=>{setConcept('Hook Changed')}}>Click</button>

    </>
   
  )
}

export default Example

