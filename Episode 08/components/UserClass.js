import React from 'react'

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Ahemdabad"
            },
        }

        console.log(props.name + " Construtor");
    }


    async componentDidMount(){
         console.log(this.props.name + "Component DID Mount")

         const data = await fetch("https://api.github.com/users/prarthit1010");
         const json = await data.json();

         console.log(json);
         this.setState({
            userInfo : json,
         })
    }

    render(){

        const {login, id} = this.state.userInfo;
   

        return(
        <div className='user'>

            <h1> Name : {login}</h1>
           
            <h2>Location : {id}</h2>
            <h2>This Course is namste React</h2>
       
        </div>
        )
    }
}

export default UserClass;