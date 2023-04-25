import React, { useState } from "react";
import "./FeedBack.scss";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
import Accordion from 'react-bootstrap/Accordion';
import { IoPlay } from "react-icons/io5";
import Footer from "../../../components/footer/Footer";
import { FaExchangeAlt } from "react-icons/fa";




export default function FeedBack() {

    const [showReturnPolicy, setShowReturnPolicy] = useState(true);
    const [showReturnExchange, setShowReturnExchange] = useState(false);
    const [showExchange, setShowExchange] = useState(false);
    const [showReturn, setShowReturn] = useState(false);


    let menuItems = [
        {
            title: 'Our return / Exchange Form',
            url: "/return-policy",
            id: "1"
        },
        {
            title: 'Refunds Form',
            url: "/refund-form",
            id: "2"
        },
        {
            title: 'Track my order / return',
            url: "/track-my-order",
            id: "3"
        },
        {
            title: 'Feedback',
            url: "/feed-back",
            id: "4"
        },
        {
            title: 'FAQ - Customers',
            url: "/faq-customers",
            id: "5"
        },
        {
            title: 'About us',
            url: "/about-us",
            id: "6"
        },
        {
            title: 'Careers',
            url: "/",
            id: "7"
        }
    ]

    // function onClickStartRetunr() {
    //     setShowReturnPolicy(false);
    //     setShowReturnExchange(true);
    // }
    // function onClickExchange() {
    //     setShowExchange(true);
    //     setShowReturn(false);
    // }
    // function onClickReturn() {
    //     setShowReturn(true);
    //     setShowExchange(false);
    // }

    return (
        <section>
            <Container fluid="md | sm | xs" className="pt-5 feedback-container">
                <Row className="align-items-center">
                    <Col>
                        <p className="mb-0">Home <span className="fw-bold-x">/ Help Center</span></p>
                    </Col>
                    <Col className="text-center switch-block">
                        <Button className="switch-btn" variant="primary" type="button">
                            <FaExchangeAlt /> Switch
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xxl={3} xl={3} lg={4}>
                        <h2 className="text-uppercase mb30">Help Center</h2>
                        <SideNavWithRoutingWidget menuData={menuItems} />
                    </Col>
                    <Col xxl={5} xl={4} lg={8} md={12} sm={12} xs={12}>

                        <section>

                            <h4 className="fw-bold-x mb30">FEEDBACK</h4>

                            <p className="fw-bold-x">Do tell us about your experience, for our future endurance. We are a young team, we learn things everyday around us.</p>


                            <Form className="mt-5 mb-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="First Name*" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email*" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control as="textarea" type="password" placeholder="Elaborate your experience. We wish to learn more from our customers." />
                                </Form.Group>
                            </Form>
                            <div className="text-center">
                                <p className="text-grey">This would help us to grow, in a good way.</p>
                                <Button className="mt-4 submit-btn" variant="primary" type="button">
                                    Submit
                                </Button>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </section>

    );
}