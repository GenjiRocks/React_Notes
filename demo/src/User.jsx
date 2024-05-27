import React,{useState} from 'react'

function User() {
    const [color, setColor] = useState({
        color1: 'Red',
        color2: 'Green',
        color3: 'Yellow'
    });

    const [userDetails, setUserDetails] = useState([
      {username:'neel',age:27,designation:'frontend developer'},
      {username:'max',age:20,designation:'backend developer'},
      {username:'nithin',age:29,designation:'fullstack developer'},
      {username:'nivya',age:30,designation:'HR'}
    ]);
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

            <table className='table rounded shadow table-border border-secondary mt-5 w-50'>
              <thead>
                <tr>
                  <th className='p-3 bg-secondary'>Sl No</th>
                  <th className='p-3 bg-secondary'>NAME</th>
                  <th className='p-3 bg-secondary'>AGE</th>
                  <th className='p-3 bg-secondary'>DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.map((item,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{item.username}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    </tr>
                ))}
                
              </tbody>
            </table>

    </>
 
  )
}

export default User