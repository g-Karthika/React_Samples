import React from 'react'

class FirstFriend extends React.Component{
render(){
    return(
        <div>
        <div>
            Mr. {this.props.children} from {this.props.location}
        </div>
        
        </div>
    )
}
}

export default FirstFriend;