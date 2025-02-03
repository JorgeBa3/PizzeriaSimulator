import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Menu(){

  return(
    <div>
      <h1>Menu</h1>
    </div>
  );

}


function Pizzas(){
  return(
    <ul>
      <Pizza />
    </ul>
  );
}

function Pizza(){
  return(
    <li>
      <h2>Pizza</h2>
      <p>Ingredients: </p>
    </li>
  );
}


root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);
