
import './App.css';
import mystyle from '../src/ashstyle.module.css'
import Random from './Random';
import Example from './Example'
import User from './User';

function App() {
  // JS codes
  const h1style = {color:'blue', backgroundColor:'black'}
  const username = 'Ashwin'
  const subject = "React"
  return (
    // HTML Code
    <>
      <div>
      <h1>My first React Hello World</h1>
      <h2>Hello World with external style</h2>
    </div>
      <h1 style={{color:'brown',backgroundColor:'aqua'}}>Hello World with inline Style</h1>
      <h1 style={h1style}>Hello world inline second method</h1>
      <p className={[mystyle.reactStyle,mystyle.style2].join(' ')}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum obcaecati, modi nesciunt, laboriosam perspiciatis, corrupti delectus soluta odio velit molestias natus cupiditate iure et quaerat omnis optio hic magni eum.
      Ratione tempore non aperiam quisquam, ut officia doloribus rerum? Enim, magnam soluta tempore dolore nobis quisquam et rem earum quibusdam, natus explicabo delectus magni officia nulla! Minima adipisci tempora cumque?</p>
      <h2>My user name is {username}</h2>

      <ul>
        {/* <li><Random uname={username}/></li>
        <li><Example sub={subject} age={27}/></li> */}

        <User/>
        
        
      </ul>
    </>
  
  );
}

export default App;
