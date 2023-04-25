import React from "react";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
import "./Checkout.scss";
import { Col, Container, Row, Form, Button} from "react-bootstrap";
import NavBar from '../../../components/NavBar';
import Footer from "../../../components/footer/Footer";

export default function CheckOut() {
    return (
        <div>
            <NavBar/>
            <Container className="mt-5 pt-5 checkout-container">
                <p className="slug mt-5"><b>Home /</b> Shopping Bag</p>
                <Row className="mt-3 mt-md-5">
                    <div className="title">Products in Bag</div>
                    <Col md={9}>
                        <div className="check-details">
                            <div className="list">
                                <Row>
                                    <Col md={6}>
                                        <div className="detail-area d-flex">
                                            <div className="img-area">
                                                <img src="/assets/images/png/productdetail/preview-1.png" alt="" />
                                            </div>
                                            <div className="pro-det">
                                                <div className="gender">Men</div>
                                                <div className="pro-title">Tricolour highed</div>
                                                <div className="pro-color">Color: Black</div>
                                                <div className="pro-size">Size: Large/40</div>
                                                <div className="pro-price">Rs.899</div>
                                                <div className="pro-qty d-md-none">Quantity: 1</div>
                                                
                                                <br></br>
                                                <a href="">Add to Wishlist</a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>                                        
                                        <div className="pro-qty">Quantity: 1</div>
                                        <div className="pro-del">X</div>
                                    </Col>
                                </Row>
                            </div> 
                            <div className="list">
                                <Row>
                                    <Col md={6}>
                                        <div className="detail-area d-flex">
                                            <div className="img-area">
                                                <img src="/assets/images/png/productdetail/preview-1.png" alt="" />
                                            </div>
                                            <div className="pro-det">
                                                <div className="gender">Men</div>
                                                <div className="pro-title">Tricolour highed</div>
                                                <div className="pro-color">Color: Black</div>
                                                <div className="pro-size">Size: Large/40</div>
                                                <div className="pro-price">Rs.899</div>
                                                <div className="pro-qty d-md-none">Quantity: 1</div>
                                                
                                                <br></br>
                                                <a href="">Add to Wishlist</a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>                                        
                                        <div className="pro-qty">Quantity: 1</div>
                                        <div className="pro-del">X</div>
                                    </Col>
                                </Row>
                            </div>                            
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="order-area">
                            <div className="summary">ORDER SUMMARY</div>
                            <div className="item d-flex">
                                <label>Subtotal:</label>
                                <span>Rs. 1458.00</span>
                            </div>
                            <div className="item d-flex">
                                <label>Shipping:</label>
                                <span>Rs. 100</span>
                            </div>
                            <div className="item d-flex">
                                <label>Discount:</label>
                                <span>Rs. 0</span>
                            </div>
                            <div className="item d-flex">
                                <label>Total:</label>
                                <span>Rs. 1558.00</span>
                            </div>
                        </div>
                        <div className="check-btn">Checkout to payment</div>
                        <div className="services d-flex">                        
                            <img src="/assets/images/svg/lock.svg" alt="" />
                            Consumers data protection
                        </div>
                        <div className="services d-flex">
                            <img src="/assets/images/svg/lock.svg" alt="" />
                            Secure payment with SSL
                        </div>

                        <div className="summary mt-5">DELIVERY INFORMATION</div>

                        <h6><b>Delivery Time:</b> 3 to 8 working days</h6>
                        <h6><b>Delivery by:</b> Shiprocket</h6>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col lg={2}>
                        <button className="wish mb-2">Bag of Wishlist</button>
                    </Col>
                    <Col lg={2}>
                        <button className="continue-ship mb-2">Continue shop</button>
                    </Col>
                    <Col lg={4} className="d-flex mb-2">
                        <input type="" placeholder="Enter coupon / promotional code" />
                        <button className="coupon">Apply</button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}