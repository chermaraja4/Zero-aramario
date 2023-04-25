import React, { useState } from "react";
import "./ReturnPolicy.scss";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
import Accordion from 'react-bootstrap/Accordion';
import { IoPlay } from "react-icons/io5";
import Footer from "../../../components/footer/Footer";
import { FaExchangeAlt } from "react-icons/fa";
import MobileSwitchWidget from "../../../widgets/MobileSwitchWidget/MobileSwitchWidget";





export default function ReturnPolicy() {

    const [showReturnPolicy, setShowReturnPolicy] = useState(true);
    const [showMobileSwitch, setShowMobileSwitch] = useState(false);
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

    function onClickStartRetunr() {
        setShowReturnPolicy(false);
        setShowReturnExchange(true);
    }
    function onClickExchange() {
        setShowExchange(true);
        setShowReturn(false);
    }
    function onClickReturn() {
        setShowReturn(true);
        setShowExchange(false);
    }
    function onClickSwitch() {
        setShowMobileSwitch(true);
    }
    function route(e) {
        console.log(e);
    }

    return (
        <section>
            {showMobileSwitch ? (
                <MobileSwitchWidget menuData={menuItems} />
            ) : ( <Container fluid="md | sm | xs" className="pt-5 return-policy-container">
            <Row className="align-items-center">
                <Col>
                    <p className="mb-0">Home <span className="fw-bold-x">/ Help Center</span></p>
                </Col>
                <Col className="text-center switch-block">
                    <Button className="switch-btn" variant="primary" type="button" onClick={() => onClickSwitch()}>
                        <FaExchangeAlt /> Switch
                    </Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xxl={3} xl={3} lg={4}>
                    <h2 className="text-uppercase mb30 desktop-title-left">Help Center</h2>
                    <SideNavWithRoutingWidget menuData={menuItems} />
                </Col>
                {showReturnPolicy ? (<Col xxl={5} xl={4} lg={8} md={12} sm={12} xs={12}>
                    <section>
                        <h4 className="fw-bold-x mb30">OUR RETURN POLICY AND PROCESS</h4>
                        <p className="fw-bold-x">Quickly and easily return your item(s) through our Returns Portal! Return portal is open to all Indian customers.</p>
                        <ul className="return-points">
                            <li>
                                You have 7 days from the date of delivery to return your purchased item.
                            </li>
                            <li>
                                In the interests of hygiene, we may refuse returns where it’s obvious that the item has been worn, washed or soiled.
                            </li>
                            <li>
                                Defective products need not be sent back to us, unless confirmed by the Customer Experience Team. If you have received a defective product, send us images at help@zeroarmario.com and we will get back to you.
                            </li>
                        </ul>
                        <Button className="mt-4 return-btn" variant="primary" type="button" onClick={() => onClickStartRetunr()}>
                            Start Return
                        </Button>
                        <section className="accordion-block">
                            <p className="fw-bold-x">FAQ's</p>
                            <Accordion defaultActiveKey="" flush className="mt-3">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> <IoPlay className="play-icon" /> How does the return process work?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <IoPlay className="play-icon" />How does the return policy works if you buy it during a Sale?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <IoPlay className="play-icon" /> How do I return my orders?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header> <IoPlay className="play-icon" />How do I self ship the products?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header> <IoPlay className="play-icon" /> Finding any difficulty on understanding any of these</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </section>
                        <Row className="justify-content-lg-start justify-content-md-center">
                            <p className="fw-bold-x mt-5">DID THIS ANSWER YOUR QUESTION?</p>
                            <Col xl={4} lg={4} md={3} sm={5} xs={5}>
                                <Button className="mt-4 answer-btn" variant="primary" type="button">
                                    Yes it was!
                                </Button>
                            </Col>
                            <Col xl={4} lg={4} md={3} sm={5} xs={5}>
                                <Button className="mt-4 answer-btn" variant="primary" type="button">
                                    No it wasn't!
                                </Button>
                            </Col>
                        </Row>
                    </section>
                </Col>) : ""}
                {showReturnExchange ? (<Col xxl={7} xl={6} lg={8} md={12} sm={12} xs={12}>
                    <section>
                        <Row className="radio-block mt-5">
                            <h4 className="fw-bold-x mb30">RETURN/EXCHANGE FORM</h4>
                            <div className="cnt-bold-and-small mb-4">
                                <p className="fw-bold-x mb-0">Select a service you want from our side</p>
                                <span>If you have purchased the item(s) during a sale, it is not eligible for a return or refund.</span>
                            </div>

                            <label>
                                <input type="radio" name="radio-button" value="css" onClick={() => onClickExchange()} />
                                <span>Exchange</span>
                            </label>
                            <label>
                                <input type="radio" name="radio-button" value="no" onClick={() => onClickReturn()} />
                                <span>Return</span>
                            </label>
                            <div className="cnt-bold-and-small mt-4 mb-4">
                                <p className="fw-bold-x mb-2">Select the reason that why you want to change the product</p>
                                <span>Cancelation will work only if your have purchased the item(s) before its being dispatched from our warehouse, which is 24 hours from the time of purchase or Before you receive dispatched message/email from us.</span>
                            </div>
                            {showExchange ? (
                                <>
                                    <label>
                                        <input type="radio" name="radio-button" value="css" />
                                        <span>Accidental purchase</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Wrong size</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Found better product</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Wrong delivery address</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Product no longer required</span>
                                    </label>
                                    <div className="cnt-bold-and-small mt-4">
                                        <p className="fw-bold-x mb-2">Notify us, if your need to change the size or quantity</p>
                                        <span>If you have purchased the item(s) during a sale, it is not eligible for a return or refund.</span>
                                    </div>
                                    <Col xl={4} lg={4} md={3} sm={5} xs={5}>
                                        <Button className="mt-4 change-btn" variant="primary" type="button">
                                            Change of size
                                        </Button>
                                    </Col>
                                    <Col xl={4} lg={4} md={3} sm={5} xs={5}>
                                        <Button className="mt-4 change-btn" variant="primary" type="button">
                                            Change of quantity
                                        </Button>
                                    </Col>
                                </>
                            ) : ""}
                            {showReturn ? (
                                <>
                                    <label>
                                        <input type="radio" name="radio-button" value="css" />
                                        <span>Received wrong size</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Received wrong product</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Product arrived being damaged</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Product shown in the image is different from the product recevied</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio-button" value="no" />
                                        <span>Product arrived late</span>
                                    </label>
                                    <Form className="">
                                        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                                            <Form.Label className="fw-bold-x">Any queries</Form.Label>
                                            <Form.Control as="textarea" type=" " placeholder="e.g. I want to exchange my t-shirt from size M to L." />
                                        </Form.Group>
                                        <Button className="mt-4 submit-btn" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </>
                            ) : ""}
                        </Row>
                    </section>
                </Col>) : ""}
            </Row>
        </Container>)}


           
            <Footer />
        </section>

    );
}