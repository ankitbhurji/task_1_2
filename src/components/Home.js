import React from "react";


function Home() {

// let pass = localStorage.getItem("ankitPassword");
// let mail = localStorage.getItem("ankitEmail");

let fname = localStorage.getItem("ankitFname");
let lname = localStorage.getItem("ankitLname");
let hobies = localStorage.getItem("ankitHobbies");
let gender = localStorage.getItem("ankitGender");
let contry = localStorage.getItem("ankitContires");
let state = localStorage.getItem("ankitStates");
let city = localStorage.getItem("ankitCity");
let img = localStorage.getItem("ankitImage");


  return (
    <>
        <h1 className="text-center">Login Successfully</h1><br></br>
       
        {/* login user details */}
        <div>
          <ul className="list-group">
              <h2><li className="list-group-item active">Your Details</li></h2>
              <h4><li className="list-group-item ">First Name: {fname}</li></h4>
              <h4><li className="list-group-item">Last Name: {lname}</li></h4>
              <h4><li className="list-group-item">hobbies: {hobies}</li></h4>
              <h4><li className="list-group-item">Gender: {gender}</li></h4>
              <h4><li className="list-group-item">Country: {contry}</li></h4>
              <h4><li className="list-group-item">State: {state}</li></h4>
              <h4><li className="list-group-item">City: {city}</li></h4>
              <h4><li className="list-group-item">Your Image: {img}</li></h4>
  
          </ul>
        </div>
      
    </>
  );
}

export default Home;
