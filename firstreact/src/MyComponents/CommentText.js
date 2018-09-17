import React from 'react'

class CommentText extends React.Component{
render(){
    return(
      
        <div>
            Comment:{this.props.children} 
        </div>
        
       
    )
}
}

export default CommentText;