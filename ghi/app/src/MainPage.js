import './App.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function MainPage() {
  return (
    <div className="px-5 py-5 my-5 text-center">
    <div className="opacity-75">
    </div>
      <h1>
        <img src="https://i.imgur.com/tkeHZlr.png" className="" alt= "CarCar Logo" width="" height=""/>
        </h1>
        <div className="container-sm">
      <div className="col-lg-3 mx-auto">
      </div>
        <p className="lead mb-4">
          CarCar takes you FarFar... <NavLink className="navbar-brand" to="/customer/new">harhar</NavLink>
        </p>
        <p>
          Hidden Challenge: Follow the Yellow Brick Code!
        </p>
        
        
      </div>
      <div></div>
    </div>
  );
}
console.log("Click on the result of our hilarious slogan!")
export default MainPage;
