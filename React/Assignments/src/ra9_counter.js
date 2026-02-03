import React from "react";

class CounterVal extends React.Component{

    constructor(props){
        super(props); 
        this.state={
            counter: 0
        }
    }

    addC(){
        this.setState({counter: this.state.counter+1})  
    }
    subC(){
        this.setState({counter: this.state.counter-1})  
    }
    resetC(){
        this.setState({counter:0})
    }
   
    render(){
        return(
            <div>
                <button onClick={() => this.addC()}> Add</button>
                <br></br>
                <button onClick={() => this.subC()}> Sub</button>
                <br></br>
                <button onClick={() => this.resetC()}> Reset=0</button>
                <br></br>
                <p>Counter: {this.state.counter}</p>
            </div>
        )
    }
}

export default CounterVal;