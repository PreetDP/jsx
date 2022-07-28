//to create a component and show it to browser


//1. import react and reactdom library
//React libarary: Defines what component is and how multiple components work together.
//React dom: Library that knows how to get the component and display in the browser.
import React from "react";
import  ReactDOM  from "react-dom/client";


//2. get reference to the div with id root from index.html
const el = document.getElementById('root');

//3. tell react to take control of that element
//we want to show our app inside el element we do that using reactdom.
const root = ReactDOM.createRoot(el);

//4. create a component: function that returns jxs.
function App(){
    let message = 'Bye there';
    if(Math.random()>0.5){
        message="Hello there";
    }
    return <h1> {message}</h1>;
}

//5. show the component on the screen.
root.render(<App />);

//Note: JSX is pass to the Babel which converts it into equivalent javascript.
//writing jsx doesnt make anything show up in browser automatically
//This creates instruction for react telling it to make an element
//we have to return it from a component for react to use it.

