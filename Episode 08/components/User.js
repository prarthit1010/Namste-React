import React, { useState } from 'react'

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(2);

  return (
    <div className='user'>

        <h1>Count  = {count}</h1>
        <h1>Count  = {count2}</h1>

        <h2>Name : {props.name}</h2>
        <h2>This Course is namste React</h2>
    </div>
    
  )
}

export default User