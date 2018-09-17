import React from 'react';
import {HashRouter, NavLink, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Friends from './Friends';
import NotFound from './NotFound';

class  SpaWebsite extends React.Component {
   
    render() { 
        return (

            <BrowserRouter>
                <div>
                    <h1>SPA in React</h1>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink exact strict to="/friends">Friends</NavLink></li>
                        </ul>
                        <div>
                            {/* <Route path="*" component={NotFound}></Route> */}
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/about" component={About}></Route>
                            <Route exact strict path="/friends" component={Friends}></Route>
                            <Redirect to="/" component={NotFound} />

                            </div>
                    </div>
                
            </BrowserRouter>
          );
    }
}
 
export default SpaWebsite;