import React from "react";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
import "./ChangePassword.scss";
import { Col, Container, Row, Form, Button} from "react-bootstrap";



export default function ChangePassword() {

    let menuItems = [
        {
            title: 'Account Information',
            url: "/account-information",
            id: "1"
        },
        {
            title: 'Change Password',
            url: "/change-password",
            id: "2"
        },
        {
            title: 'My orders',
            url: "/my-orders",
            id: "3"
        },
        {
            title: 'Help Center',
            url: "/",
            id: "4"
        }
    ]
    return (
        <Container fluid="md | sm | xs" className="pt-5 change-passsword-container">
            <p>Home / Account</p>
            <Row className="mt-5">
                <Col xxl={3} xl={3} lg={4}>
                    <h2 class="text-uppercase mb30">My Account</h2>
                    <SideNavWithRoutingWidget menuData={menuItems} />
                    <h6 className="logout-link">Log out</h6>
                </Col>
                <Col xxl={5} xl={4} lg={8} md={12} sm={12} xs={12}>
                    <h4 className="fw-bold-x mb30">Create new password</h4>

                    <Form className="global-form-container">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Old password" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4 passwordInput" controlId="">
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4 passwordInput" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirm new password" />
                        </Form.Group>
                        <p>Your new password will be notified to your email for conformational purpose.</p>
                        <Button className="mt-4 save-btn" variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}




