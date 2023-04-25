import React, { useState } from "react";
import "./FaqCustomers.scss";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
import Accordion from 'react-bootstrap/Accordion';
import { IoPlay } from "react-icons/io5";
import Footer from "../../../components/footer/Footer";
import { FaExchangeAlt } from "react-icons/fa";





export default function FaqCustomers() {

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

    return (
        <section>
            <Container fluid="md | sm | xs" className="pt-5 return-policy-container">
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

                            <h4 className="fw-bold-x mb30">FAQ - FROM CUSTOMERS</h4>

                            <p className="fw-bold-x">Frequently asked questions are here as help guide for the customers which would give you a basic headsup on your few questions.</p>


                            <section className="accordion-block">
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
                                        <Accordion.Header> <IoPlay className="play-icon" />How does the refund policy works if you buy it during a Sale?</Accordion.Header>
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
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header> <IoPlay className="play-icon" />Finding any difficulty on understanding any of these</Accordion.Header>
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
                                        <Accordion.Header> <IoPlay className="play-icon" />What shipping options does ZeroArmario offer?</Accordion.Header>
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
                                        <Accordion.Header> <IoPlay className="play-icon" />How long willl it take my order to process for shipping?</Accordion.Header>
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
                                        <Accordion.Header> <IoPlay className="play-icon" />Do i get a refund if I buy products on sale?</Accordion.Header>
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
                                        <Accordion.Header> <IoPlay className="play-icon" />How to find am i eligible for a refund?</Accordion.Header>
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
                                        <Accordion.Header> <IoPlay className="play-icon" />How to track my order?</Accordion.Header>
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
                                        <Accordion.Header> <IoPlay className="play-icon" />Where to find your tracking ID?</Accordion.Header>
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
                            <p className="fw-bold-x mt-5">DID THIS ANSWER YOUR QUESTION?</p>
                            <Row>
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
                    </Col>
                </Row>
            </Container>
            <Footer />
        </section>

    );
}