import React from 'react';
import FeedbackTitle from '../containers/FeedbackTitle';
import FeedbackDescription from '../containers/FeedbackDescription';

class RootComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                I am a Root Component.
                <p></p>
                I will user Containers.
                <p></p>
                <FeedbackTitle />
                <FeedbackDescription />
                <hr></hr>
            </div>    
         );
    }
}
 
export default RootComponent;