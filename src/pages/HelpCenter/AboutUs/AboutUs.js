import React, { useState } from "react";
import "./AboutUs.scss";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { IoPlay } from "react-icons/io5";
import Footer from "../../../components/footer/Footer";
import { FaExchangeAlt } from "react-icons/fa";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";





export default function AboutUs() {

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
                    <Col xxl={6} xl={6} lg={8} md={12} sm={12} xs={12}>
                        <section>
                            <h4 className="fw-bold-x mb30">ABOUT US</h4>
                            <p className="fw-bold-x mb-5">A longstanding love affair with colours and fashion are responsible for the start of all things at ZeroArmario. We are India’s freshest and trendiest online apparel company offering the latest styles in fashion. We cater to the fashion needs of the young and vibrant who dare to be bold, stylish and want nothing but the best.</p>
                            <ul className="return-points">
                                <li>
                                    We are always keeping our eyes and ears wide open, looking for the coolest treats to give you guys, our awesome customers. W source our products from several suppliers, big and small but usually in limited numbers, so you can be sure what you buy from us stays individual and original. So if you see something you like, we recommend you to grab it quickly as it may not be around for too long. We assure you whatver you buy from ZeroArmario is high grade merchandise.
                                </li>
                                <li>
                                    Most importantly, we consider you, our amazing customer to be at the centre of what we do. Suggestions for any new ranges, designs, brand improvement, styles, colours… are always welcome. Please feel Free to get in touch with us through email, instagram or calling us on the toll free number.
                                </li>
                            </ul>
                        </section>
                        <div className="text-left mt-5">
                            <p className="">To know more about us</p>
                            <Button className="visit-company" variant="primary" type="button">
                                Visit our company
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </section>

    );
}