import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [gender, setGender] = useState("");
  const [Hobbies, setHobbies] = useState("");
  const [contry, setCountry] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");


  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!fname || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("ankitEmail", JSON.stringify(email));
      localStorage.setItem("ankitPassword",JSON.stringify(password)
      );

        localStorage.setItem("ankitFname",JSON.stringify(fname));
        localStorage.setItem("ankitLname",JSON.stringify(lname));
        localStorage.setItem("ankitHobbies",JSON.stringify(Hobbies));
        localStorage.setItem("ankitGender",JSON.stringify(gender));
        localStorage.setItem("ankitContires",JSON.stringify(contry));
        localStorage.setItem("ankitStates",JSON.stringify(states));
        localStorage.setItem("ankitCity",JSON.stringify(city));
        localStorage.setItem("ankitImage",JSON.stringify(image));
        console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }


  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="p-5">
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3 className="text-center p-5">Register</h3>
              {/* firstname field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter FIrst Name"
                  name="name"
                  onChange={(event) => setFname(event.target.value)}
                />
                </div>
              </div>

              {/* lastname field*/}
              <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        name="name"
                        onChange={(event) => setLname(event.target.value)}
                    />
                </div>
              </div>

              {/* email field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div  className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                </div>
              </div>

              {/* password field*/}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div  className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                </div>
              </div>

              {/* gender field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">gender</label>
                <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="gender"
                  onChange={(event) => setGender(event.target.value)}
                />
                </div>
              </div>

              {/* hobbies field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Hobbies</label>
                <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hobbies"
                  onChange={(event) => setHobbies(event.target.value)}
                />
                </div>
              </div>

              {/* image field */}
              <div className="form-group row">
                {/* <p>Upload Image:</p> */}
                <div className="col-sm-10">
                    Upload Image &nbsp;<input type="file" id="myFile" name="filename2" 
                    onChange={(event) => setImage(event.target.value)}
                    />
                </div>
              </div>

              {/* profession field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Profession</label>
                <div  className="col-sm-10">
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Artist</option>
                  <option>Photographer</option>
                  <option>Team Player</option>
                  <option>Full Stack</option>
                </Form.Control>
                </div>
              </div>

              {/* Country field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">select Country</label>
                <div className="col-sm-10">
                <Form.Control
                  as="select"
                  onChange={(event) => setCountry(event.target.value)}
                >
                        <option>Select</option>
                        <option>India</option>
                        <option>Usa</option>
                        <option>Uk</option>
                        <option>Japan</option>
                        <option>Russia</option>
                        <option>Bangladesh</option>
                        <option>China</option>
                        <option>Other</option>
                </Form.Control>
                </div>
              </div>

              {/* state field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">select State</label>
                <div className="col-sm-10">
                <Form.Control
                  as="select"
                  onChange={(event) => setStates(event.target.value)}
                >
                        <option>Select</option>
                        <option>Karnataka</option>
                        <option>Andhra Pradesh</option>
                        <option>Tamil Nadu</option>
                        <option>Punjab</option>
                        <option>Jharkhand</option>
                        <option>Chhattisgarh</option>
                        <option>Rajasthan</option>
                        <option>Uttar Pradesh</option>
                        <option>Assam</option>
                        <option>Uttrakhand</option>
                        <option>Maharashtra</option>
                        <option>Gujrat</option>
                        <option>Bihar</option>
                        <option>Odisha</option>
                        <option>Haryana</option>
                        <option>West Bengal</option>
                        <option>Tripura</option>
                        <option>Madhya Pradesh</option>
                        <option>Goa</option>
                        <option>Kerla</option>
                        <option>Meghalya</option>
                        <option>Himanchal Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Nagaland</option>
                        <option>Manipur</option>
                        <option>Mizoram</option>
                        <option>Telangana</option>
                        <option>Sikkim</option>
                        <option>Delhi</option>
                </Form.Control>
                </div>
              </div>

              {/* city field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">select City</label>
                <div className="col-sm-10">
                <Form.Control
                  as="select"
                  onChange={(event) => setCity(event.target.value)}
                >
                        <option>Select</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                        <option>Ahmedabad</option>
                        <option>Chennai</option>
                        <option>Kolkata</option>
                        <option>Pune</option>
                        <option>Jaipur</option>
                        <option>Lucknow</option>
                        <option>Kanpur</option>
                        <option>Nagpur</option>
                        <option>Indore</option>
                        <option>Thane</option>
                        <option>Bhopal</option>
                        <option>Visakhapatnam</option>
                        <option>Patna</option>
                        <option>Vadodara</option>
                        <option>Ghaziabad</option>
                        <option>Ludhiana</option>
                        <option>Agra</option>
                        <option>Other</option>
                </Form.Control>
                </div>
              </div>

              {/* phone number field */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Phone No.</label>
                <div className="col-sm-10">
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
                </div>
              </div>

              {/* register/login field */}
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-center p-4">
                Already registered{" "}<button className="btn">log in?</button>
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;




