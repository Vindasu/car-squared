import './App.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useEffect } from "react";

function MainPage2() {
  useEffect(() => {
    console.log("Congrats!!! You made it!!!")
}, [])
  return (
    <div className="px-5 py-0 my-5 text-center">
      <h1>
        <img src="https://i.imgur.com/HONA4GU.jpeg" className="" alt= "buff santa" width="400" height="600"/>
      </h1>

    <div className="opacity-75">
      
    </div>
      <h1>
        </h1>
        <div className="container-sm">
      <div className="col-lg-3 mx-auto">
      
      </div>
        <p className="lead mb-4">
        <iframe width="854" height="480" src="https://www.youtube.com/embed/UNud0XD0KBU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </p>

        
        </div>
      </div>

  );
// function MainPage2() {
//   return (
//     <div className="Background2">
//       <div className="px-5 py-5 my-5 text-center">
//       <div className="opacity-75">
//       </div>
//         <h1>
//           </h1>
//           <div className="container-sm">
//         <div className="col-lg-3 mx-auto">
//         </div>
//           <p className="lead mb-4">
//           {/* <iframe width="854" height="480" src="https://www.youtube.com/embed/UNud0XD0KBU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
//           </p>
//           <p>
//             WELCOME TO HOME
//           </p>
          
          
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
}
export default MainPage2;
