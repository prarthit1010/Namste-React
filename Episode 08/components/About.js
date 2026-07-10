import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
        <h1>This is About Page</h1>

        <User name={"Ravi from User componenets "}/>
        <UserClass name= {"Prarthit From the Classbase Components"}/>
        
    </div>
  )
}

export default About