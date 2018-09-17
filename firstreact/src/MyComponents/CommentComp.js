import React from 'react'
import NameComp from './NameComp';

import ActionComp from './ActionComp';



class CommentComp extends React.Component{
render(){
    return(
      
        <div>
        <NameComp myname={this.props.myname}></NameComp>
        <CommentComp>This is for Comment!</CommentComp> 
        <ActionComp></ActionComp>
    </div>

    )
}
}
export default CommentComp;