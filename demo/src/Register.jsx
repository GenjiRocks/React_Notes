import React, {useState} from 'react'

function Register() {

    const [details, setdetails] = useState({
        username: "",
        email: "",
        password: "",
    });

    console.log(details);

    const handeRegister =()=>{
        const {username,email} =details /* Destructuting of objects */
        alert(`User registered is ${username} and email is ${email}`)
    }



  return (
    <>
    
        <div className='d-flex justify-content-center align-items-center'>
        <form className='m-5 p-4 shadow w-50'>
            <h3 className='text-center text-primary' >Register</h3>
          <div className='mb-3'>
          <input type="text" className='form-control' placeholder='Enter Username' onChange={(e)=>{setdetails({...details,username:e.target.value})}}/>
          </div>
          <div className='mb-3'>
          <input type="email" className='form-control' placeholder='Enter Email' onChange={(e)=>{setdetails({...details,email:e.target.value})}}/>
          </div>
          <div className='mb-3'>
          <input type="password" className='form-control' placeholder='Enter Password'onChange={(e)=>{setdetails({...details,password:e.target.value})}} />
          </div>
          <div className='mb-3'>
          <button className='btn btn-primary' onClick={handeRegister} >Register</button>
          </div>
          
        </form>

        </div>
    
    
     
    

     
    </>
   
    
  )
}

export default Register