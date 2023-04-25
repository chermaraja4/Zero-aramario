import React from "react";
import "./Filladdress.scss";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

export default function Filladdress() {    
    return (
        <Container fluid="md | sm | xs" className="pt-5 orders-list-container">
            <Row className="mt-5">                
                <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                    <Row>
                        <p> 
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> */}
                            <span className="track-order">We got it, Thank you for your order!</span><br /><span>It's ordered. Check your inbox shortly for a confirmation email</span> </p>

                            <div className="estimate">Estimated date of Delivery: <span>May 12 2020</span></div>
                            <div className="order-number">Order Number: <span>C21200002</span></div>

                            <button className="shopping">Continue shopping</button>

                            <div className="address-area">
                                <Row>
                                    <Col md={6} sm={12} xs={12}>
                                        <h3>Delivery Address</h3>
                                        <div className="address">
                                            <p><b>Soorya kumar</b></p>
                                            <p>368 Kingston road</p>
                                            <p>Wimbledon chase</p>
                                            <p>London</p>
                                            <p>SW20 8LN</p>
                                            <p>9876543210</p>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <h3>Payment method</h3>
                                        <p>Credit card/Debit card</p>
                                        <br></br>
                                        <h3>Shipping Method</h3>
                                        <p>Regular shipping</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="help-area">
                                <h3>Need Help?</h3>
                                <p>Send Feedback</p>
                                <p>Domestic contact: 90258 90258</p>
                                <p>Exchange & Returns</p>
                                <p>Order information</p>
                            </div>
                    </Row>
                </Col>
                <Col className="filter-block" xxl={4} xl={4} lg={4} sm={12} xs={12}>
                    <h2>Your products from us <span>Print bill</span></h2>

                    <div className="order-listing">
                        <Row>
                            <div className="col-4">
                                <img src="" alt="" />
                            </div>
                            <div className="col-6">
                                <h5 className="order-title">Patched with red</h5>
                                <p className="order-size">Size: Large</p>
                                <p className="order-qty">Qty:1</p>
                            </div>
                            <div className="col-2">
                                <h6 className="order-price">Rs.899</h6>
                            </div>
                        </Row>
                    </div>
                    <Row>
                        <div className="col-6">Subtotal</div>
                        <div className="col-6 text-end">Subtotal</div>
                    </Row>
                    <Row>
                        <div className="col-6">Shipping</div>
                        <div className="col-6 text-end">Rs.60</div>
                    </Row>
                    <Row>
                        <div className="col-6"><b>Total</b></div>
                        <div className="col-6 text-end"><b>Rs.2058</b></div>
                    </Row>
                </Col>
            </Row>  
            <Row className="security-icons">
                <div className="col-6 col-sm-3">
                    <img src="/assets/images/png/scooter/scooter@3x.png" alt="" />
                    <p>FREE SHIPPING OVER Rs.1500+</p>
                </div>
                <div className="col-6 col-sm-3">
                    <img src="/assets/images/png/arrows/arrows@3x.png" alt="" />
                    <p>FREE SHIPPING OVER Rs.1500+</p>
                </div>
                <div className="col-6 col-sm-3">
                    <img src="/assets/images/png/battery@3x/battery@3x@3x.png" alt="" />
                    <p>FREE SHIPPING OVER Rs.1500+</p>
                </div>
                <div className="col-6 col-sm-3">
                    <img src="/assets/images/png/scooter/scooter@3x.png" alt="" />
                    <p>FREE SHIPPING OVER Rs.1500+</p>
                </div>                
            </Row>
        </Container>
    )
}