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
    return (
        < >
            <h2>HELLO,</h2>
            <p className="text-grey fw-bold-x">From your dashboard you have the ability to do the Sneak Peak of your recent account activity and update your ccount information, Select a link below to view or edit information.</p>

            <Row className="mt-5">
                <Col xxl={6} xl={6} lg={6} md={12}>
                    <div className="title-with-border">
                        <h5 className="text-uppercase">Account Information</h5>
                    </div>
                    <div className="contact-info mt-3">
                        <p className="fw-bold-x">Contact information</p>
                        <p className="fw-bold-x">Edit</p>
                    </div>
                    <div className="details">
                        <p><span>Name</span> : <span>Space studio</span></p>
                        <p><span>Contact no</span> : <span>9876543201</span></p>
                        <p><span>Email</span> : <span>spacedesign@gmail.com</span></p>
                    </div>
                    <div className="title-with-border mt-5">
                        <h5 className="text-uppercase">Address book</h5>
                    </div>
                    <p className="fw-bold-x text-underline mt-3">Manage addresses</p>

                </Col>
            </Row>
        </>    


        // <>
        // <h1>Shipping address</h1>
        //     <Form className="global-form-container mt-5 mb-5">
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Control
        //                 placeholder="Address line 1*"
        //                 name="addresOne"
        //                 value={addresOne}
        //                 onChange={(e) => onChange(e)}
        //             />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Control
        //                 placeholder="Address line 2"
        //                 name="AddressTwo"
        //                 value={AddressTwo}
        //                 onChange={(e) => onChange(e)}
        //             />
        //         </Form.Group>

        //         <Form.Group className="mb-3 passwordInput" controlId="formBasicPassword">
        //             <Form.Control
        //                 placeholder="City*"
        //                 name="City"
        //                 value={City}
        //                 onChange={(e) => onChange(e)}
        //             />
        //         </Form.Group>


        //         <Form.Group className="mb-3 passwordInput" controlId="formBasicPassword">
        //             <Form.Control
        //                 placeholder="State*"
        //                 name="State"
        //                 value={State}
        //                 onChange={(e) => onChange(e)}
        //             />
        //         </Form.Group>

        //         <Form.Group className="mb-4 passwordInput w-50" controlId="formBasicPassword">
        //             <Form.Control
        //                 placeholder="Postal code*"
        //                 name="Postalcode"
        //                 value={Postalcode}
        //                 onChange={(e) => onChange(e)}
        //             />
        //         </Form.Group>

        //         <p className="fw-bold-x">Would you like to Label your address</p>

        //         <Row className="w-50">
        //             <Col>
        //             Home
        //             </Col>
        //             <Col>
        //             Work
        //             </Col>
        //         </Row>

        //         <Button
        //             className="create-account-button w-50 mt-5 "
        //             variant="primary"
        //             type="submit"
        //             onClick={(e) => sumbitForm(e)}
        //         >
        //             Save address
        //         </Button>
        //     </Form>
        // </>
    )
}