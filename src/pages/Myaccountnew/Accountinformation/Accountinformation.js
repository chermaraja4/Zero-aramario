import React from "react";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
import "./AccountInformation.scss";
import { Col, Container, Row } from "react-bootstrap";


export default function AccountInformation() {

    

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
        <Container fluid="md | sm | xs" className="pt-5 account-information-container">
            <p>Home / Account</p>
            <Row className="mt-5">
                <Col xxl={3} xl={3} lg={4}>
                    <h2 className="text-uppercase">My Account</h2>
                    <SideNavWithRoutingWidget menuData={menuItems} />

                    <h6 className="logout-link">Log out</h6>
                </Col>
                <Col xxl={7} xl={7} lg={8} md={12} sm={12} xs={12}>
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
                </Col>
            </Row>
        </Container>
    )
}