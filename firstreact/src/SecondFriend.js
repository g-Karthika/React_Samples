import React from 'react'

class SecondFriend extends React.Component{
render(){
    return(
        
        <div>
             Mr. {this.props.children} is {this.props.profession}
        </div>
         
       
    )
}
}

export default SecondFriend;