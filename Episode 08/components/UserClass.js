import React from 'react'

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 3
        }
    }

    render(){

        const {count , count2} = this.state;
        const {name} = this.props;

        return(
        <div className='user'>

            <h1>Count = {count}</h1>
            <h1>Count = {count2}</h1>

            <h2>Name : {name}</h2>
            <h2>This Course is namste React</h2>
        </div>
        )
    }
}

export default UserClass;