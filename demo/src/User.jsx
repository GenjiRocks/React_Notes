import React,{useState} from 'react'

function User() {
    const [color, setColor] = useState({
        color1: 'Red',
        color2: 'Green',
        color3: 'Yellow'
    });
    console.log(color);
  return (
    <>
           <div>User</div>
           <ul>
            <li>{color.color1}</li>
            <li>{color.color2}</li>
            <li>{color.color3}</li>
           </ul>

            <button className='btn btn-danger' onClick={()=>setColor({...color,color3:'blue'})}>Click</button>{/* Rest Operator */}

    </>
 
  )
}

export default User