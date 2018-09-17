import React from 'react'
import ReactDOM from 'react-dom'
import Product from './components/Product'
import ProductList from './components/ProductList';
//import DisplayUser from './DisplayUser';
import RemoteData from './APIComponent/RemoteData';


ReactDOM.render(
    <RemoteData></RemoteData>,
    document.getElementById("root")
);

 /*ReactDOM.render(
    <ProductList></ProductList>,
    document.getElementById("root")
); 

 ReactDOM.render(
    <DisplayUser></DisplayUser>,
    document.getElementById("root")
);



 */
