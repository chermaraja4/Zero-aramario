import React from "react";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
import "./Myorders.scss";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FiArrowRight, FiCircle } from "react-icons/fi";
import { BsCircleFill, BsInfoCircle } from "react-icons/bs";




export default function Myorders() {

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
        <Container fluid="md | sm | xs" className="pt-5 my-orders-container">
            <Row className="mt-5 orders-desktop">
                <p>Home / Account</p>
                <Col className="filter-block" xxl={3} xl={3} lg={3} sm={12} xs={12}>
                    <h2 class="text-uppercase">My Account</h2>
                    <SideNavWithRoutingWidget menuData={menuItems} />
                    <h6 className="logout-link">Log out</h6>
                </Col>
                <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
                    <h2 className="text-uppercase">My orders</h2>
                    <Row className="right-block">
                        <p><BsCircleFill className="circleGreen" /> <span className="text-grey">Dispacted</span> <span className="track-order">Track this order</span> </p>

                        <Col xxl={8} xl={8} lg={8}>
                            <Row>
                                <Col xxl={5} ck xl={5} lg={5}>
                                    <img className="w-100" src="/assets/images/png/cart/men.png" />
                                </Col>
                                <Col className="position-relative">
                                    <div className="amount-block">
                                        <p className="text-grey mb-0"> Total Amount</p>
                                        <p>Rs.822</p>
                                    </div>
                                    <h5 className="product-title">Tricolor highed</h5>
                                    <p className="text-grey mb-0">Color: <span>Black</span></p>
                                    <p className="text-grey mb-0">Size: <span>Large/40</span></p>

                                    <Button className="mt-3 order-details-btn" variant="primary" type="submit">
                                        Order details
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="text-right" xxl={4} xl={4} lg={4}>

                            <Button className="buy-again-btn" variant="primary" type="submit">
                                Buy this again
                            </Button>
                            <Button className="cancel-order-btn" variant="primary" type="submit">
                                Cancel order
                            </Button>

                            <Button className="return-btn" variant="primary" type="submit">
                                Return/ Exchange
                            </Button>
                            <p className="text-right info-text mt-3"> <BsInfoCircle className="info-icon"></BsInfoCircle> This applies only from 7 days of your purchase</p>
                        </Col>
                    </Row>
                    {/* mobile my orders */}
                </Col>
            </Row>
            <section className="orders-mobile">
            <h2 className="text-uppercase border-0">My orders</h2>

                <Row className="mt-4">
                    <p><BsCircleFill className="circleGreen" /> <span className="text-grey">Dispacted</span> <span className="track-order-mobile">Track this order</span> </p>

                    <Col md={4} sm={4} xs={4}>
                        <img className="w-100" src="/assets/images/png/cart/men.png" />
                    </Col>
                    <Col className="pl-0 position-relative" md={8} sm={8} xs={8}>
                        <div className="order-details-block-mobile">
                            <p className="mb-0">Qty: 1</p>
                            <Button className="order-details-btn" variant="primary" type="submit">
                                Order details
                            </Button>
                        </div>
                        <h5 className="product-title">Tricolor highed</h5>
                        <p className="mb-0 size">Size: <span>Large/40</span></p>
                        <p className="mb-0 price">Color: <span>Black</span></p>
                    </Col>

                    <Col className="" md={12} sm={12} xs={12}>
                        <Button className="buy-again-btn w-100 mt-4 py-3" variant="primary" type="submit">
                            Buy this again
                        </Button>

                        <Button className="cancel-order-btn mobile w-100 mt-4 py-3" variant="primary" type="submit">
                            Cancel order
                            <FiArrowRight className="arrow-right" />
                        </Button>

                        <Button className="return-btn mobile w-100 mt-4 py-3" variant="primary" type="submit">
                            Return/Exchange
                        </Button>

                        <p className="text-center info-text mt-3"> <BsInfoCircle className="info-icon"></BsInfoCircle> This applies only from 7 days of your purchase</p>


                        <div className="border-bottom-mobile"></div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <p><BsCircleFill className="circleGrey" /> <span className="text-grey">Dispacted</span> <span className="delivered"> Delivered on: 22 march 2020</span> </p>

                    <Col md={4} sm={4} xs={4}>
                        <img className="w-100" src="/assets/images/png/cart/men.png" />
                    </Col>
                    <Col className="pl-0 position-relative" md={8} sm={8} xs={8}>
                        <div className="order-details-block-mobile">
                            <p className="mb-0">Qty: 1</p>
                            <Button className="order-details-btn" variant="primary" type="submit">
                                Order details
                            </Button>
                        </div>
                        <h5 className="product-title">Tricolor highed</h5>
                        <p className="mb-0 size">Size: <span>Large/40</span></p>
                        <p className="mb-0 price">Color: <span>Black</span></p>
                    </Col>

                    <Col className="" md={12} sm={12} xs={12}>
                        <Button className="buy-again-btn w-100 mt-4 py-3" variant="primary" type="submit">
                            Buy this again
                        </Button>

                        <Button className="cancel-order-btn mobile w-100 mt-4 py-3" variant="primary" type="submit">
                            Cancel order
                            <FiArrowRight className="arrow-right" />
                        </Button>

                        <Button className="return-btn mobile w-100 mt-4 py-3" variant="primary" type="submit">
                            Return/Exchange
                        </Button>

                        <p className="text-center info-text mt-3"> <BsInfoCircle className="info-icon"></BsInfoCircle> This applies only from 7 days of your purchase</p>


                        <div className="border-bottom-mobile"></div>
                    </Col>
                </Row>
            </section>

        </Container>
    )
}