/*import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';


let title1= React.createElement("h1",null,"Welcome to Keysight company");
let title2= React.createElement("h2",{style:{color:"red"}},"We build awesome products");

ReactDOM.render([title1,title2],document.getElementById("root"));
*/

/*
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/





/*
import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
 
let title1 = React.createElement('h1', null, 'Welcome to Keysight company');
let title2 = React.createElement('h2', {style : {color: "red"}}, 'We build awesome products in AI');
 
ReactDOM.render([title1,title2], document.getElementById('root'));
*/




/*
import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";

//logincomponent is parent component and header and footer are child components. hence we can reuse their codes inside parent component
 
class LoginComponent extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <br/><br/>
        <h2>Login Page</h2>
        <p>This is my Login Page and we are creating this page for user form</p>
        <form>
          <label> User Name:</label>
          <input type="text" name="username" /> <br/><br/>
          <label> Password:</label>
          <input type="password" name="password" /> <br/><br/>
          <input type="submit" value="Login" /> 
        </form>
        <br/><br/>
        <Footer />
      </div>
    )
  }
}
 

class Header extends React.Component{
  render(){
    return(
      <h1>Welcome to Keysight Login Form</h1>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <p>Copyright ABC Company 2024</p>
    )
  }
}

 
ReactDOM.render(<LoginComponent />, document.getElementById('root'));
*/



/*
import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
 
function LoginComponent(){
    return(
      <div>
        <Header />
        <br/><br/>
        <h2>Login Page</h2>
        <p>This is my Login Page and we are creating this page for user form</p>
        <form>
          <label> User Name:</label>
          <input type="text" name="username" /> <br/><br/>
          <label> Password:</label>
          <input type="password" name="password" /> <br/><br/>
          <input type="submit" value="Login" /> 
        </form>
        <br/><br/>
        <Footer />
      </div>
    )
  }

 

function Header(){
    return(
      <h1>Welcome to Keysight Login Form</h1>
    )
  }

function Footer(){
    return(
      <p>Copyright ABC Company 2024</p>
    )
  }

 
ReactDOM.render(<LoginComponent />, document.getElementById('root'));
*/


/*
import React from "react";
import ReactDOM from "react-dom";
import ShoppingComp from "./shopping";
//import App from "./App";
 
ReactDOM.render(<ShoppingComp />, document.getElementById('root'));
*/

/*
import React from "react";
import ReactDOM from "react-dom";
import PriceComp from "./price";
//import App from "./App";
 
ReactDOM.render(<PriceComp />, document.getElementById('root'));
*/


/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./ra1_flights";

 
ReactDOM.render(<App />, document.getElementById('root'));
*/


/*
import React from "react";
import ReactDOM from "react-dom";
import AppComp from "./ra2_contextapi";

 
ReactDOM.render(<AppComp />, document.getElementById('root'));
*/


/*
import React from "react";
import ReactDOM from "react-dom";
import Instrument from "./ra3_hooks";

 
ReactDOM.render(<Instrument />, document.getElementById('root'));
*/


/*
import React from "react";
import ReactDOM from "react-dom";
import Marks from "./ra4_hooks2";

 
ReactDOM.render(<Marks />, document.getElementById('root'));
*/



/*
import React from 'react';
import ReactDOM from 'react-dom';
import Students from './ra5_list';

ReactDOM.render(
    <Students />,
    document.getElementById("root")
);
*/


/*
import React from 'react';
import ReactDOM from 'react-dom';
import AdmissionForm from './ra6_cform';

ReactDOM.render(
    <AdmissionForm />,
    document.getElementById("root")
);
*/


/*
import React from 'react';
import ReactDOM from 'react-dom';
import CourseFeedbackForm from './ra7_uform';

ReactDOM.render(
    <CourseFeedbackForm />,
    document.getElementById("root")
);
*/


/*
import React from 'react';
import ReactDOM from 'react-dom';

import Errors from './ra8_error';

ReactDOM.render(
    <Errors />,
    document.getElementById("root")
);
*/


import React from 'react';
import ReactDOM from 'react-dom';

import CounterVal from './ra9_counter';

ReactDOM.render(
    <CounterVal />,
    document.getElementById("root")
);