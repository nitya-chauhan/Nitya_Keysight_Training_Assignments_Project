import React from 'react';
 
class MyErrorBoundary extends React.Component{ 
   
    constructor(props){
        super(props)
        this.state = {
            errorMessage : ""
        };
    }
   
    static getDerivedStateFromError(error){
        return {
            errorMessage : error.toString()
        }
    }
 
    componentDidCatch(error, info){
        this.logErrorToServices(error.toString(), info.componentStack)
    }
 
    logErrorToServices = console.log
 
    render(){
        if(this.state.errorMessage){
            return <p>{this.state.errorMessage}</p>
        }
        return this.props.children;
    }
}
 
class ErrorComp1 extends React.Component{
    componentDidMount(){
        throw new Error("from first component")
    }
    render(){
        return <h2>ErrorComp1</h2>
    }
}
 
class Comp2 extends React.Component{
    render(){
        return <h2>You are doing well !!</h2>
    }
}
 
class ErrorComp3 extends React.Component{
    componentDidMount(){
        throw new Error("from third component")
    }
    render(){
        return <h2>ErrorComp3</h2>
    }
}
 
function Errors(){
    return(
        <div>
            <MyErrorBoundary>
                <ErrorComp1 />
            </MyErrorBoundary>
 
            <MyErrorBoundary>
                <Comp2 />
            </MyErrorBoundary>
 
            <MyErrorBoundary>
                <ErrorComp3 />
            </MyErrorBoundary>
        </div>
    )
}
 
export default Errors;
