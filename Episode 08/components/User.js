import React from 'react'

const User = (props) => {
  return (
    <div className='user'>
        <h1>Name : {props.name}</h1>
        <h2>This Course is namste React</h2>
    </div>
    
  )
}

export default User