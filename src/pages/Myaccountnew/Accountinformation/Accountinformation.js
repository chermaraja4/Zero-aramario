// import React from "react";
import "./AccountInformation.scss";
// import { Col, Container, Row } from "react-bootstrap";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { useDispatch } from "react-redux";
import React, { useState } from "react";


export default function AccountInformation() {
    const dispatch = useDispatch();
    const [emailError, setEmailError] = useState('');
    const [userRegister, setUserRegister] = useState({
        addresOne: "",
        AddressTwo: "",
        City: "",
        State: "",
        Postalcode: ""
    })
    const { addresOne, AddressTwo, City, State, Postalcode } = userRegister
    const onChange = (e) => {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
    }
    const sumbitForm = (e) => {
        e.preventDefault()
        // dispatch(UserRegister(userRegister));
    }

    const [currentStep, setCurrentStep] = useState('selectAddresses')
    return (
        < >

            {currentStep === '' && <>

                <h2>HELLO,</h2>
                <p className="text-grey fw-bold-x">From your dashboard you have the ability to do the Sneak Peak of your recent account activity and update your ccount information, Select a link below to view or edit information.</p>

                <Row className="mt-5">
                    <Col xxl={6} xl={6} lg={6} md={12}>
                        <div className="title-with-border">
                            <h5 className="text-uppercase">Account Information</h5>
                        </div>
                        <div className="contact-info mt-3">
                            <p className="fw-bold-x">Contact information</p>
                            <p className="fw-bold-x" onClick={() => { setCurrentStep('editAddress') }}>Edit</p>
                        </div>
                        <div className="details">
                            <p><span>Name</span> : <span>Space studio</span></p>
                            <p><span>Contact no</span> : <span>9876543201</span></p>
                            <p><span>Email</span> : <span>spacedesign@gmail.com</span></p>
                        </div>
                        <div className="title-with-border mt-5">
                            <h5 className="text-uppercase">Address book</h5>
                        </div>
                        <p className="fw-bold-x text-underline mt-3" onClick={() => { setCurrentStep('shippingAddress') }}>Manage addresses</p>

                    </Col>
                </Row>
            </>

            }
            {currentStep === 'editAddress' &&

                <>
                    <h4 className="fw-bold-x mb30">Contact Information</h4>

                    <Form className="global-form-container ">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control placeholder="First name" className="custom-input border-0" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4 passwordInput" controlId="">
                            <Form.Control placeholder="Last name" className="custom-input border-0" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4 passwordInput" controlId="formBasicPassword">
                            <Form.Control placeholder="Email address" className="custom-input border-0" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4 passwordInput" controlId="formBasicPassword">
                            <Form.Control placeholder="Phone no." className="custom-input border-0" />
                        </Form.Group>
                        <Button className="mt-4 save-btn btn btn-dark" type="submit">
                            Save
                        </Button>
                    </Form>
                </>
            }
            {currentStep === 'shippingAddress' &&
                <>
                    <h4>Shipping address</h4>
                    <Form className="shipping-container mt-5 mb-5 ">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                className="input-height inputbox-border"
                                placeholder="Address line 1*"
                                name="addresOne"
                                value={addresOne}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                className="input-height inputbox-border"
                                placeholder="Address line 2"
                                name="AddressTwo"
                                value={AddressTwo}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 passwordInput" controlId="formBasicPassword">
                            <Form.Control
                                className="input-height inputbox-border"
                                placeholder="City*"
                                name="City"
                                value={City}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3 passwordInput" controlId="formBasicPassword">
                            <Form.Control
                                className="input-height inputbox-border"
                                placeholder="State*"
                                name="State"
                                value={State}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 passwordInput w-50" controlId="formBasicPassword">
                            <Form.Control
                                className="input-height inputbox-border "
                                placeholder="Postal code*"
                                name="Postalcode"
                                value={Postalcode}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>

                        <p className="fw-bold-x">Would you like to Label your address</p>

                        <Row className="w-75">
                            <Col>
                                <div className="switch-btn">
                                    <span>j</span>
                                    <span>Home</span>
                                </div>
                            </Col>
                            <Col>
                                <div className="switch-btn">
                                    <span>j</span>
                                    <span>Work</span>
                                </div>
                            </Col>
                        </Row>

                        <Button
                            className="w-50 mt-5 btn btn-dark"
                            type="submit"
                            onClick={(e) => sumbitForm(e)}
                        >
                            Save address
                        </Button>
                    </Form>
                </>


            }

            {currentStep === 'selectAddresses' &&
                <>



                    <div className="header">Select addresses</div>

                    <Row className="mt-3 gap-2">
                        <Col lg={1} md={1} sm={1} xs={1} className=" first-column d-flex align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            </div>
                            {/* <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        </div> */}
                        </Col>
                        <Col lg={7} md={7} sm={11} xs={11} className="p-0">
                            <div class="card card-bg text-white w-100 p-3">
                                <div class="d-flex justify-content-around">
                                    <div className="w-50"> 368 Kingston road Wimbledon chase London SW20 8LN</div>
                                    <div> one</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12} className="mt-md-0 mt-sm-2 mt-xs-2 mt-2">
                        <Row>
                                <Col md={6} sm={6} xs={6}>
                                    <Button
                                        className="custom-button"
                                    >
                                        Edit your address
                                    </Button>
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    <Button
                                        className="mt-md-2 border-btn">
                                        Delete this address
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mt-3 gap-3 mt-sm-4">
                        <Col md={1} xs={1} className="first-column d-flex align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            </div>
                            {/* <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        </div> */}
                        </Col>
                        <Col md={6} xs={11} className="p-0">
                            <div class="card dashed-border w-100 p-3 ">
                                <div class="d-flex justify-content-around">
                                    <div className="w-50"> 368 Kingston road Wimbledon chase London SW20 8LN</div>
                                    <div> one</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="mt-md-0 mt-sm-2 mt-xs-2 mt-2">
                            <Row>
                                <Col md={12} xs={6}>
                                    <Button
                                        className="custom-button"
                                    >
                                        Edit your address
                                    </Button>
                                </Col>
                                <Col md={12} xs={6}>
                                    <Button
                                        className=" mt-md-2 border-btn">
                                        Delete this address
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Button
                        className="w-25 mt-5 custom-button "
                    >
                        Add new address
                    </Button>
                </>
            }
        </>
    )
}