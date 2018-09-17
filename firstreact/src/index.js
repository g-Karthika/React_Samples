import React from 'react';
import ReactDOM from 'react-dom'


import FirstFriend from './Firstcomponent';
import SecondFriend from './SecondFriend';
import Name from './components/Name';
import FormComponent from './FormComponent/FormComponent';

//import CommentComp from './MyComponents/CommentComp';
import LifeCycleComponent from './LifeCycleComponent/LifeCycleComponent';
import ControlledForm from './FormComponent/ControlledForm';
import RemoteData from './APIComponent/RemoteData';


var position = document.getElementById("rootcomponent");
var position2 = document.getElementById("container2");
var position3 = document.getElementById("lifecycle");
var position4 = document.getElementById("commentcomponent");
//var position5 = document.getElementById("actioncomponent");

ReactDOM.render(
<div>
<FirstFriend location="Chennai">Bhavin</FirstFriend>
<Name fcolor="red" bcolor="pink">B</Name>
<Name fcolor="green" bcolor="pink">H</Name>
<Name fcolor="blue" bcolor="pink">A</Name>
<Name fcolor="brown" bcolor="pink">V</Name>
<Name fcolor="yellow" bcolor="pink">I</Name>
<Name fcolor="white" bcolor="pink">N</Name>

</div>
,position)

ReactDOM.render(<SecondFriend profession="Scientist">Bhavesh</SecondFriend>,position2)





/*ReactDOM.render(
<div>
<CommentComp myname="Karthika">Comment1</CommentComp>
<CommentComp myname="Manju">Comment2</CommentComp>
<CommentComp myname="Mahes">Comment3</CommentComp>

</div>,position4)*/


//ReactDOM.render(<LifeCycleComponent></LifeCycleComponent>,position3)

ReactDOM.render(
    <div>
    {/* <LifeCycleComponent></LifeCycleComponent> */}
    <p></p>
    {/* <FormComponent></FormComponent> */}
    <p></p>
    {/* <ControlledForm></ControlledForm>  */}
    <p></p>
    <RemoteData></RemoteData>
    </div>
    ,position4)







