import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const plusCount = () => {
        setCount(count + 1)
    };
    const minusCount = () => {
        if(count > 0){
            setCount(count - 1)
        } 
        else {
            alert("You've reached 0!")
        }
    };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={plusCount}> Add </button>
      <button onClick={minusCount}> Subtract </button>
    </div>
  )
}

export default Counter
