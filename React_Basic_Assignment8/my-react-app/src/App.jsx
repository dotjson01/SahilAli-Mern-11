/* 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/ 

// deleted eveything in app.jsx and keep it empty

// This looks like HTML but it's JSX (JavaScript + XML)
// JSX lets you write HTML-like code in JavaScript!

/* 

import React from 'react';
 // This is the component UI , components are basically a function , name must be Capital letter [ App ](not app )
 function App(){ // this is function return some UI or something
  return ( // return will gives us what you want to display 
    // it html we are using css and in react we use className 
    <div className='container mt-5'>
      <h1 className='text-center text-primary'>Hello</h1>
      <p className='text-center'>
        If you see this
      </p>
    </div>
  )
 }


 */

import React, { useState } from "react";


// let 's buidl the new component : Product that will accept props
function Product(props){
  console.log("Prop Recieved", props) // check the browser to see this 

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-primary">
          {props.name}
        </h2>
        <p className="card-text fs-4 text-success fw-bold">
          {props.price}
        </p>
        <p className="card-text text-muted">
          {props.description}
        </p>
      </div>
    </div>
  );
}

//new component : State
function Counter(){
  // this is state, special react function ( called Hooks )
  // it gives two things useState, Setcount
  // useState means the current value
  // Setcount means a function to change the value


    
  const [count, setCount] = useState(0);
  //      ↑       ↑          ↑
  //   current  updater   starting
  //   value    function   value

  // Read as: "count starts at 0"



  // let's make a function which is able to change the state 

  const increment = ()=>{ // increase the value
    setCount(count+1);

    /*
        count = count + 1` → Changes variable, React doesn't notice ❌
        setCount(count + 1)` → Tells React "update and re-render!" ✅
        setCount` is like pressing the "Save" button - it tells React to update!
        
     */
  };

  const decrement = ()=>{
    setCount(count -1 );
  }

  const reset= ()=>{
    setCount(0); // set back to 0
  }


 return (
    <div className="card border-primary shadow-lg mb-4">
      <div className="card-body text-center">
        <h2 className="card-title text-primary mb-4">
          🎮 Counter Game
        </h2>
        
        {/* This number changes when state changes! */}
        <div 
          className={`display-1 fw-bold my-4 ${count >= 0 ? 'text-success' : 'text-danger'}`}
          style={{ fontFamily: 'monospace' }}
        >
          {count}
        </div>
        
        {/* These buttons trigger state changes */}
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <button 
            onClick={decrement}
            className="btn btn-danger btn-lg"
          >
            ➖ Decrease
          </button>
          
          <button 
            onClick={reset}
            className="btn btn-secondary btn-lg"
          >
            🔄 Reset
          </button>
          
          <button 

          /*

          1. Button's `onClick={increment}` triggers
          2. `increment` function runs
          3. `setCount(count + 1)` updates state
          4. React sees state changed
          5. React **re-renders** the Counter component
          6. Screen shows new count!

           */
            onClick={increment}
            className="btn btn-success btn-lg"
          >
            ➕ Increase
          </button>
        </div>
        
        {/* Fun message that changes based on count */}
        <p className="mt-4 fs-5 text-muted fst-italic">
          {count === 0 && "🎯 Start counting!"}
          {count > 0 && count < 10 && "👍 You're doing great!"}
          {count >= 10 && "🌟 Wow, that's a lot!"}
          {count < 0 && "🤔 Going into the negative zone!"}
        </p>
      </div>
    </div>
  );
}




/*

// in above we had set the template , in below he have use this template

 function App(){
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-dark">
        IPO Listed
      </h1>

      <div className="row">
        <div className="cols-md-12">

          <Product
          // - We're **passing data** to the Product component
          // - `name`, `price`, `description` become properties of the `props` object
          name = "SBI"
          price = "1290"
          description = "Listed "
          />


          <Product
          name = "HDFC"
          price = "1277"
          description = "Upcoming IPO "
          />


          <Product
          name = "Zomato"
          price = "845"
          description = "Listed "
          />



          <Product
          name = "NSE"
          price = "1299"
          description = "Listed"
          />


          <Product
          name = "BSE"
          price = "1356"
          description = "Listed"
          />

        </div>
      </div>

    </div>
  ) 
 }

 export default App;


*/
 

//  MAIN APP COMPONENT - ADD Counter here!

function App() {
  return (
    <div className="container mt-5 ">
      <h1 className="text-center mb-5 text-dark">
         Learning React: Components, Props & State
      </h1>
      
      {/*  STATE SECTION  */}
      <div className="mb-5">
        <h3 className="text-info mb-3"> State Demo: Interactive Counter</h3>
        <p className="text-muted">
          Click the buttons and watch React update automatically. That's State! 
        </p>
        <Counter />
      </div>
      
      {/*  PROPS SECTION  */}
      <div className="mb-5">
        <h3 className="text-info mb-3"> Props Demo: Reusable Products</h3>
        <p className="text-muted">
          Same component, different data through props!
        </p>
        
        <Product 
          name="Gaming Laptop"
          price="1299"
          description="Powerful laptop for gaming and coding!"
        />
        
        <Product 
          name="Wireless Headphones"
          price="199"
          description="Crystal clear sound, 30hr battery life"
        />
        
        <Product 
          name="Smartwatch"
          price="399"
          description="Track your fitness and stay connected"
        />
      </div>
      
      
    </div>
  );
}

export default App;