import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="counterBlock">
      <button onClick={handleClick} className="btn">click me</button>
      <p className='text'>count: {count}</p>
    </div>
  );
};



export default App;
