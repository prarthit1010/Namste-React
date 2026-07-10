import React from 'react'

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }
    }

    render(){

        const {count} = this.state;
        const {name} = this.props;

        return(
        <div className='user'>

            <h1>Count = {count}</h1>
        
            <button onClick={()=> {
                // Never Update State Variable Directly
                this.setState({
                    count : this.state.count + 1,
                })
            }}>Increse the Count Here</button>
           

            <h2>Name : {name}</h2>
            <h2>This Course is namste React</h2>
        </div>
        )
    }
}

export default UserClass;