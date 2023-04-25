import React, { Fragment } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
// import { registerUser } from "../../action/auth";
import "./register.css";
import validator from 'validator';
import { useDispatch } from "react-redux";
import { AdminRegister } from "../../redux-tool/RegisterRedux";
function Register() {
  const dispatch = useDispatch();
  const [warning, setWarning] = useState(false);
  const [register, setRegister] = useState({
        name:"",
        username:"",
        password:"",
        isAdminActive: true
  })
const {name, username, password, isAdminActive} = register
  const onChange = (e) =>{
    setRegister({...register,[e.target.name]:e.target.value, [e.target.validate]:true})
  }

  const sumbitForm = async(e) =>{
    e.preventDefault()
    dispatch(AdminRegister(register)); 
  }

  return (
    <Fragment>
      <NavBar />
      <div id="signup-web" className="log">
        <form>
          <div className="input-cont">
            <h2
            className="font-face-pnb"
            ><b>Sign up</b>
              
            </h2>
          </div>

          <div className="authBlock">
            <div className="input-cont formGroup">
              <input
                type="text"
                name="name"
                required
                className="formControl"
                placeholder="First name"
                value={name}
                style={{ fontSize: "16px" }}
                onChange={(e)=>onChange(e)}
              />
              <div className="border1"></div>
              <span style={{ color: "red" }} hidden={!warning}>
                {" "}
                First Name is required{" "}
              </span>
            </div>
            {/* <div className="input-cont formGroup">
              <input
                id="lastName"
                type="text"
                name="name"
                validate="usernameValidate"
                value={name}
                required
                className="formControl"
                placeholder="Last name"
                style={{ fontSize: "16px" }}
                onChange={(e)=>onChange(e)}

              />
              <div className="border1"></div>
              <span style={{ color: "red" }} hidden={!warning && !register.usernameValidate}>
                {" "}
                Username is required{" "}
              </span>
            </div> */}
            <div className="input-cont formGroup">
              <input
                type="text"
                required
                className="formControl"
                name="username"
                validate="emailValidate"
                value={username}
                placeholder="Email address"
                style={{ fontSize: "16px" }}
                onChange={(e)=>onChange(e)}

              />
              <div className="border1"></div>
              <span style={{ color: "red" }} hidden={!warning && !register.emailValidate}>
                Email is required and it should be valid
              </span>
            </div>
            <div className="input-cont formGroup">
              <input
                type="password"
                required
                className="formControl"
                name="password"
                validate="passwordValidatae"
                value={password}
                placeholder="Password"
                style={{ fontSize: "16px" }}
                onChange={(e)=>onChange(e)}
              />
              <div className="border2"></div>
              <span style={{ color: "red" }} hidden={!warning && !register.passwordValidate}>
                Password is required
              </span>
            </div>

            {/* <div className="input-cont formGroup">
              <input
                type="radio"
                checked={isAdminActive}
                required
                className="formControl"
                name="isAdminActive"
                value={isAdminActive}
                placeholder="Password"
                style={{ fontSize: "16px" }}
                onChange={(e)=>onChange(e)}
              />

            </div> */}

            <div className="input-container formGroup mt-5">
              <Form.Group
                className="mb-3 formGroup font-face-pn"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label={"I agree to the Terms & Condition of the ZeroArmario"}
                  
                />
              </Form.Group>
            </div>

            <div style={{ height: "32px" }}></div>
            <div className="input-cont formGroup d-flex align-items-center justify-content-center">
              <button
                style={{
                  textTransform: "none",
                  borderRadius: "2px",
                }}
                onClick={(e) => sumbitForm(e)}
                className="button btn-lg btn-block font-face-pn"
              >
                {" "}
                Create a new account
              </button>
            </div>
            <br />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
