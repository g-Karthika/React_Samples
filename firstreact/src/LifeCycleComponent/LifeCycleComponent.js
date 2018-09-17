import React from 'react'
import ReactDOM from 'react-dom'


class LifeCycleComponent extends React.Component{

    constructor(){
        super()
        this.state={
            status:0
        }
        this.updateState = this.updateState.bind(this)
    }

    componentWillMount(){
        console.log("component will be displayed in view")
        alert("component is not yet displayed in view. It will be displayed")
    }
    componentDidMount(){
        console.log("Component is displayed in the mount")
    }
    componentWillUpdate(){
        console.log("Component state will update")
    }
    componentDidUpdate(){
        console.log("Component state is updated")
    }

    componentWillUnmount(){
        console.log("Removing the LifeCycleComponent from the view")
    }
    updateState(){
        this.setState({status:this.state.status+1})
        if(this.state.status >=10){
            ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
        }
    }
    unMountMe(){
        console.log("Its UnmountMe")
        ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
    }
    render()
    {
        return(
            <div>
                It will not do anything!
                Take a look on console
                <button onClick={this.updateState}>Change Status{this.state.status}</button>
                <button onClick={this.unMountMe}>UnMount</button>
                </div>

        )
    }

}
export default LifeCycleComponent;