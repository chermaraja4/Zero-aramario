import "./signup.scss";
import React,{useState} from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { useDispatch } from "react-redux";

import {UserRegister} from '../../redux-tool/RegisterRedux';

function SignUp() {
    const dispatch = useDispatch();
    const [emailError, setEmailError] = useState('');
    const [userRegister, setUserRegister] = useState({
          firstName:"",
          lastName:"",
          phoneNumber:"",
          email:"",
          password:"",
    })
    const {firstName, lastName,phoneNumber, email, password} = userRegister 
    const onChange = (e) =>{
        setUserRegister({...userRegister,[e.target.name]:e.target.value})
    }
    const sumbitForm =(e)=>{
        e.preventDefault()
        dispatch(UserRegister(userRegister));
    }
    return (
        <section className="">
            <section className="signin-desktop">
                <Row className="h-100 align-items-center mx-0">
                    <Col className="login-left-image" xxl={5} xl={5} lg={6} md={12}>
                        <img className="w-100" src="/assets/images/login-sample.jpg" />
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={12} className="">
                        <Row className="justify-content-center w-100">
                            <Col className="" xxl={8} xl={8} lg={11} md={12}>
                                <h2>WELCOME TO OUR ALL NEW</h2>
                                <h2>MINIMAL FASHION</h2>
                                <p>join us for exclusive discounts, top-secret-content</p>
                                <Form className="global-form-container mt-5 mb-5">
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="First Name" 
                                                    name="firstName"
                                                    value={firstName}
                                                    onChange={(e)=>onChange(e)}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Last Name" 
                                                    name="lastName"
                                                    value={lastName}
                                                    onChange={(e)=>onChange(e)}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control 
                                            type="phoneNumber" 
                                            placeholder="phoneNumber" 
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            onChange={(e)=>onChange(e)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="email" 
                                            name="email"
                                            value={email}
                                            onChange={(e)=>onChange(e)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 passwordInput" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={(e)=>onChange(e)}
                                             />
                                        <FiEye className="eyeIcon" />
                                    </Form.Group>
                                    <Row className="mt-5">
                                        <Col>
                                            <p className="select-gender">Select Gender:</p>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Male" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Female" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={12} xl={12} lg={12} md={12}>
                                            <div className="form-check py-3">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                <label className="form-check-label" for="flexCheckIndeterminate">
                                                    I agree to the <span><a>Terms and Conditions</a></span> of Zero Armario
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Button 
                                    className="create-account-button" 
                                    variant="primary" 
                                    type="submit"
                                    onClick={(e) => sumbitForm(e)}
                                    >
                                        Create a new Account
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
            <section className="signin-mobile pt-5">
                <Row className="justify-content-center w-100 mx-0">
                    <Col className="" xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="title-with-border-block">
                            <h4 class="title">Complete your sign up</h4>
                        </div>
                        <Form className="global-form-container mt-2 mb-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>
                            <Form.Group className="mb-3 passwordInput" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Create Password" />
                                <FiEye className="eyeIcon" />
                                <div className="mt-2 mx-0 w-100 passwrd-instructions">
                                    <div className="instructions"><p>8 Characters</p></div>
                                    <div className="instructions"><p>1 Special char</p></div>
                                    <div className="instructions"><p>1 Uppercase</p></div>
                                    <div className="instructions"><p>1 Numeric</p></div>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone no</Form.Label>
                                <Form.Control type="password" placeholder="Phone no" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="password" placeholder="Full Name" />
                            </Form.Group>
                            <Row className="mt-5">
                                <Col>
                                    <p className="select-gender">Select Gender:</p>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Male" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Female" />
                                    </Form.Group>
                                </Col>

                                {/* <Col xxl={12} xl={12} lg={12} md={12}>
                                        <div class="form-check py-3">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                I agree to the <span><a>Terms and Conditions</a></span> of Zero Armario
                                            </label>
                                        </div>
                                    </Col> */}
                            </Row>
                            <Button className="create-account-button" variant="primary" type="submit">
                                sign up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </section>

        </section>
    )
}


export default SignUp;