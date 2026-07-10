import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{

  constructor(props){
    super(props);


    console.log("Parent Construtor")
  }



  componentDidMount(){
      console.log("Parent Component DID mount ")
  }

  render(){
      console.log("Parent Render")
     return (
   <div>
       <h1>This is About Page</h1>

       <UserClass name= {"Prarthit From the Classbase Components"}/>
        {  console.log("Parent Return")}
   </div>
  )
  }
}

export default About;

// const About = () => {
//   return (
//     <div>
//         <h1>This is About Page</h1>

//         {/* <User name={"Ravi from User componenets "}/> */}
//         <UserClass name= {"Prarthit From the Classbase Components"}/>
        
//     </div>
//   )
// }

// export default About