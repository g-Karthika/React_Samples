import React from 'react'

class ActionComp extends React.Component{

    constructor(){
        super()
        this.state={
            like:0,
            unlike:0
        }
        this.likeMe = this.likeMe.bind(this)
        this.unlikeMe = this.unlikeMe.bind(this)
    }

    likeMe=function(){
        console.log("Liked");
        this.setState({
            like:this.state.like+1
        })
    }
    unLikeMe(){
        console.log("Un Liked")
        this.setState({
            like:this.state.unlike+1
        })
    }
render(){
    return(
      
        <div>
           <button onclick="{likeMe}">Likes{this.state.like}</button>
           <button onclick="{unLikeMe}">UnLikes{this.state.unlike}</button>
        </div>
        
       
    )
}
}

export default ActionComp;