import React from "react";
import "./ChangePassword.scss";
import { Form, Button } from "react-bootstrap";



export default function ChangePassword() {

    return (

        <>
            <h4 className="fw-bold-x mb30">Create new password</h4>

            <Form className="global-form-container w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Old password "  className="custom-input border-0"/>
                </Form.Group>
                <Form.Group className="mb-3 mt-4 passwordInput" controlId="">
                    <Form.Control type="password" placeholder="New Password " className="custom-input border-0"/>
                </Form.Group>
                <Form.Group className="mb-3 mt-4 passwordInput" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm new password" className="custom-input border-0"/>
                </Form.Group>
                <p>Your new password will be notified to your email for conformational purpose.</p>
                <Button className="mt-4 save-btn btn btn-dark"  type="submit">
                    Save
                </Button>
            </Form>
        </>

    )
}




