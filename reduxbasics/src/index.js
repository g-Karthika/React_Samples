import React from 'react';
import ReactDOM from 'react-dom'

import { Provider } from "react-redux";

import RootComponent from './component/RootComponent'


import { createStore } from "redux";
import allReducers from './reducers/index';

const myStore = createStore(allReducers)

ReactDOM.render(
<Provider store={myStore}>

<RootComponent />

</Provider>
    ,document.getElementById("root"))