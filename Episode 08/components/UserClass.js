import React from 'react'

class UserClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
        <div className='user'>
            <h1>Name : {this.props.name}</h1>
            <h2>This Course is namste React</h2>
        </div>
        )
    }
}

export default UserClass;