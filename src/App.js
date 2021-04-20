import React, { useState } from 'react'
import SingleColor from './SingleColor'
import swal from 'sweetalert';
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#00ff00').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
     let colors = new Values(color).all(10);
     setList(colors);
     
    } catch(error) {
     setError(true);
     swal("Please enter the correct value!", "Format: '#123456'", "error");
     console.log(error);
    }
  
  }

  return (
    <>
    <section className="container">
      <h3>color generator 1.0</h3>
      <form onSubmit={handleSubmit}>
        <input className={`${error ? 'error' : null}`}
          type="text" value={color} onChange={(e) => setColor(
          e.target.value)}  placeholder="#f15025"/>
          <button className="btn" type="submit">submit</button>
      </form>
    </section>
    <section className="colors"> 
    {list.map((color, index) => { 
      return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
    })}
    </section>
    </>
  )

}

export default App
