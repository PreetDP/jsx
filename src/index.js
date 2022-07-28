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
    // const date = new Date();
    // const time = date.toLocaleTimeString();
    if(Math.random()>0.5){
        message="Hello there";
    }
    return (
    <div>
        <h1> {new Date().toLocaleTimeString()}</h1>
        <h1> {message}</h1>
                            {/* Prop eg */}
        <input type="number" min={5} list={[1,2,3]} style={{color:'red'}} alt={message}></input>
    </div>
    
    
    );
    //We uses curly barces to show strings and numbers/expressions
}

//5. show the component on the screen.
root.render(<App />);

