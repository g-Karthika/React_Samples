import React from 'react'


class Name extends React.Component{
    render(){

        let colorname={
            
            color:this.props.fcolor,
            backgroundColor: this.props.bcolor,
            float:"left",
            padding:"5px",
            margin:"5px",
            border:"2px dotted red",
            borderRadius:"100px"
           
        }
        return(
            <div style={colorname}>
          {this.props.children}
            
            </div>
        );
    }
    }
    
    export default Name;
