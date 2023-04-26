import React from 'react'
import { useState, useEffect } from 'react';

import { Modal, Form, Button, Card, Container, Row, Col } from "react-bootstrap"; import NavBar from '../../../components/NavBar'
import "./productDetail.scss";
import { FiBookmark } from "react-icons/fi";
// import { Form, Button, Modal } from 'react-bootstrap';
import { addKart } from '../../../redux-tool/Addtocartredux';
import { useSelector, useDispatch } from "react-redux";

function ProductDetail1() {
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0)
  const dispatch = useDispatch();


  const increament = () => {
    console.log("inside")
    let val = counter + 1;
    setCounter(val)
    dispatch(addKart(val));
  }

  const decreament = () => {
    let val = counter - 1
    if (val == -1) {
      console.log("not dec")
    }
    else {
      setCounter(val)
      dispatch(addKart(val));
    }
  }

  const subImageList=['/assets/images/png/productdetail/product.png','/assets/images/png/productdetail/product.png']

  return (
    <div>
      <NavBar /><br /><br /><br /><br />
      <Container className="product-container mt-4">
        <p className='slug'><b>Home/Men/Round neck Tee/</b>2044 day call</p>
        {/* <div className="d-flex justify-content-between">
                <div>
                    <img src='' />
                </div>
            </div> */}
        <Row>
          <Col lg={8}>
            <Row>
              <Col className='col-12 col-md-3 col-xl-2 d-flex d-md-block'>
                {subImageList.map((list)=>{
                  return (
                    <div className="sub-img">
                    <img src={list} alt=""/>
                  </div>
                  )
                })}               
              </Col>
              <Col className='col-12 col-md-9 col-xl-10'>
                <div className="main-img">
                  <img src='/assets/images/png/productdetail/product.png' />
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mt-5 mt-lg-0">
            <h3 className="pro-title">2044 day call</h3>
            <div className="pro-tax mt-2">Rs.649 <span> / inc. tax</span></div>
            <Row className="mb-3 mt-4 ava-row">
              <Col col={6}><div className="ava-size">Available Size:</div></Col>
              <Col col={6}><div className="size-chart text-end">Size chart</div></Col>
            </Row>
            <div className="d-flex sizes">
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>2XL</span>
            </div>
            <select name="" className='size'>
              <option value="">Select size</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <div className="add-cart d-flex align-items-center">
              <div className="qty d-flex align-items-center">
                -
                <input type="text" value="1" />
                +
              </div>
              <Button size="md" className="products-btn" variant="" onClick={() => setShowModal(true)}>Add to cart</Button>
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Add to cart</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body> */}

                <Form.Group controlId="category">
                  <Form.Label>Add to cart</Form.Label>
                  {/* <Form.Control
               type="text"
               name='category'
               /> */}
                </Form.Group>
                {/* {counter} */}
                {/* <button className='btn'><a href="/checkout">Add to cart </a></button> */}
                {/* <Button  size="md" className="products-btn" variant="" onClick={() => setShowModal(true)}>Add Category</Button> */}
                <Button size="md" className="products-btn" variant="" onClick={() => increament()}>+</Button>
                <Button size="md" className="products-btn" variant="" onClick={() => decreament()}>-</Button>

                {/* </Modal.Body> */}
              </Modal>
            </div>

            <div className='wishlist mt-4'>Add to Wishlist</div>
            <div className='pro-des mb-5'>
              <h4>Description</h4>
              <div className="collection mt-3">
                <div className="item mb-2">
                  <label>Fabric:</label>
                  <span>100% super semi-combed cotton</span>
                </div>
                <div className="item mb-2">
                  <label>Sleeve:</label>
                  <span>Half sleeve</span>
                </div>
                <div className="item mb-2">
                  <label>Fit:</label>
                  <span>SIlm Fit</span>
                </div>
                <div className="item mb-2">
                  <label>Color:</label>
                  <span>Pitch Black</span>
                </div>
                <Row>
                  <div className="info mb-4">More information</div>

                  <Col sm={6} xs={12}  className="pro-delivers">
                    <img src='/assets/images/svg/deliver.svg' className='box-img' />
                    <h6>Order Today, Delivers:</h6>
                    <p>4 - 7 Business Days - Free</p>
                  </Col>
                  <Col sm={6} xs={12}  className="pro-delivers">
                    <img src='/assets/images/svg/lock.svg' className='box-img' />
                    <h6>Only in India</h6>
                    <p>Returns and exchanges within 7 days</p>
                  </Col>
                </Row>
                <a href="" className="share">Share this item</a>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className='related my-5 px-3'>
          <h4 className="mb-3">You may also like</h4>
          {['1','2','3','4'].map((list)=>{
            return (
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12} className="py-2 px-2" id="product">
              <Card className='border-0'>
                <a href="/product-detail">
                  {/* <div className="mobile-bookmark-outer">
                          <FiBookmark className="bookmark-icon mobile-bookmark" />
                        </div> */}
                  <Card.Img
                    variant="top"
                    src="/assets/images/png/productdetail/preview-1.png"
                    style={{ width: "100%", maxHeight: "", borderRadius: "6%" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>Rs.280</Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail1