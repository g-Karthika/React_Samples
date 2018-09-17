import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import selectFeedback from '../actions/index'



class FeedbackTitle extends React.Component {

    displayAlltitle(){
        return this.props.propsFeedbacktitles.map((fb)=>{
            return(<li key={fb.id}
            onClick={()=>{console.log(this.feedbackClicked(fb))}}
        >{fb.title}

            </li>)
        })
           
    }

    feedbackClicked(fb){
        {this.props.selectFeedback(fb)}
    }
   
    render() { 
        return ( 
            <div>
                <ul>
                {this.displayAlltitle()}
                </ul>
            </div>    
         );
    }
}

function connectStoreToComponentAsProps(state){
    console.log(state);
    return {
        propsFeedbacktitles:state.allFB
    }

}

function bindActionCreatorToComponentAsProps(dispatch){
    console.log(dispatch)
    return bindActionCreators({selectFeedback:selectFeedback},dispatch)
}
 
export default connect(connectStoreToComponentAsProps, bindActionCreatorToComponentAsProps)(FeedbackTitle);