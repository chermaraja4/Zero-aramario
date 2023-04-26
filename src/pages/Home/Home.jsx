import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import "./home.scss";
import { Carousel, Card, Container, Row, Col, Button } from "react-bootstrap";
import { FiBookmark } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../redux-tool/LoginRedux";
import { createcategorySuccess } from "../../redux-tool/CategoryRedux"

import CategoryAdd from "../Category/Category";
import SubCatogory from "../SubCategory/SubCategory";
import CreateProduct from "../CreateProduct/CreateProduct";
import CreatePtype from "../CreatePtype/CreatePtype";
import { addKart } from "../../redux-tool/Addtocartredux"
import Addtocartredux from "../../redux-tool/Addtocartredux";

function Home() {
  const localValue = localStorage.getItem("localtoken");
  const [localvalueStore, setLocalvalueStore] = useState(localValue)
  const authSucess = useSelector(loginSuccess);
  const createCategory = useSelector(createcategorySuccess)
  const datasss = useSelector((state) => state)


  // const count = useSelector(state => state.counter.count);
  // const categoryCreated = useSelector()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isNotify, setIsNotify] = useState(true);
  const [isAdmin, setIsAdmin] = useState(authSucess.payload.message)
  useEffect(() => {

    //   if(createCategory.payload.CategoryAddedStatus && isNotify)
    // {
    //     notifyFor();
    //     setIsNotify(false);
    // }

    if (authSucess.payload.message && isNotify) {
      // notify();
      // setIsNotify(false);
      dispatch(loginSuccess({ ...authSucess.payload, message: "" }))
    }
    // const isLogged = localStorage.getItem("localtoken")
    // if(!isLogged)
    // {
    //     navigate('/login');
    // }
  }, []);
  // const notify = () => toast('Login Sucesfully');
  // const notifyFor = () => toast("created successfully");z


  const exploreList = [
    { label: 'Henley shirts', routerLink: "productlists/Henley shirts/Henley shirts", imgurl: "/assets/images/png/products/4.png" },
    { label: 'Plain wear', routerLink: "productlists/Plain wear/Plain wear", imgurl: "/assets/images/png/products/3.png" },
    { label: 'Sweatshirts', routerLink: "productlists/Sweat shirts/Sweat shirts", imgurl: "/assets/images/png/products/5.png" },
    { label: 'Couple wears', routerLink: "productlists/Couple wears/Couple wears", imgurl: "/assets/images/png/products/1.png" },
    { label: 'Hoodies', routerLink: "productlists/Hoddies/Hoddies", imgurl: "/assets/images/png/products/6.png" },
    { label: 'Covid 19', routerLink: "'", imgurl: "/assets/images/png/products/2.png" }];

  const categoriesList = [{ label: 'Women', routerLink: "productlists/Women/Women", imgurl: "/assets/images/png/categories/women.png" },
  { label: 'Men', routerLink: "productlists/Men/Men", imgurl: "/assets/images/png/categories/men.png" },
  { label: 'Children', routerLink: "productlists/Children/Children", imgurl: "/assets/images/png/categories/children.png" },
  { label: 'Home', routerLink: "productlists/Home/Home", imgurl: "/assets/images/png/categories/stationary.png" }];

  const saleList = ['T-shirt', 'Hoodie', 'Inner wear', 'Shorts', "Pyjama's Kids", 'Ankle Socks', 'Joggers']
  return (
    <>
      <div className="notification">Get 50% off on selected products, not availble on COD</div>
      <NavBar />


      <section className="carousel-container">
        <Carousel
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
        >
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-text">
              <h1><p>Upto</p>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel-text">
              <h1><p>Upto</p>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-text">
              <h1><p>Upto</p>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/images/png/header.png"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel-text">
              <h1><p>Upto</p>50% off on everything</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="explore-product" style={{ marginBottom: "0px" }}>
        <Container>
          <h3>Explore Products</h3>
          <hr className="line" />
          <Row className="explore-view">
            {exploreList.map((list) => {
              return (
                <div
                  className="explore-product-item"
                  routerLink={list.routerLink}
                  onClick={() => { navigate('/product-list') }}
                >
                  <img src={list.imgurl} alt="" />
                  <p>
                    <i>{list.label}</i>
                  </p>
                </div>
              )
            })}
          </Row>
        </Container>
      </section>
      <section className="handpicked-categories">
        <Container className="container-custom">
          <h3>Handpicked categories</h3>
          <p style={{ textAlign: "center" }}>
            Explore our complete handmade products
            <br />
            featuring farhuman
          </p>
          <hr className="line" />
          <Row className="handpicked-img grid" style={{ marginTop: "50px" }}>
            {categoriesList.map((list) => {
              return (
                <Col className="" onClick={() => { navigate('/product-list') }}
                  routerLink={list.routerLink}
                  style={{ marginBottom: "30px", position: "relative" }}
                >
                  <img src={list.imgurl} alt="" />
                  <h4>{list.label}</h4>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
      <section className="sale-container">
        <Container>
          <Row className="justify-content-center button-sec">
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className="text-center">
              <h1>Sale up to 25%</h1>
              <p className="mb-2">Explore our handpicked products of top selling </p>
              <p className="">Products from Zero Armario </p>
            </Col>
            {saleList.map((list) => {
              return (
                <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={12} className="text-center" onClick={() => { navigate('/product-list') }}>
                  <Button size="md" className="products-btn" variant="">{list}</Button>{' '}
                </Col>
              )
            })}

            {/* <Col  xxl={3} xl={3} lg={3} md={4} sm={4} xs={12} className="text-center">
            {localvalueStore?<CategoryAdd />:""}
            </Col>
            <Col  xxl={3} xl={3} lg={3} md={4} sm={4} xs={12} className="text-center">
              {localvalueStore?<SubCatogory />:""}
            </Col>
            <Col  xxl={3} xl={3} lg={3} md={4} sm={4} xs={12} className="text-center">
              {localvalueStore?<CreateProduct />:""}
            </Col>
            <Col  xxl={3} xl={3} lg={3} md={4} sm={4} xs={12} className="text-center">
              {localvalueStore?<CreatePtype />:""}
            </Col> */}
          </Row>
        </Container>
      </section>

      <Container>
        <section className="shop-by-design" style={{ marginTop: "" }}>
          <div className="container-custom">
            <h3>Shop by Design</h3>
            <p style={{ textAlign: "center" }}>
              Explore our designs from different genre
              <br />
              featuring Zeroarmario
            </p>
            <hr className="line" />
            <Row className="row pt-3 pt-md-5">
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item "
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item1.png" alt="" />
                <h4 className="left">Dream of 2044</h4>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item"
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item2.png" alt="" />
                <h4 className="right">- Love to boo</h4>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item"
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item3.png" alt="" />
                <h4 className="left">Minimalism</h4>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="item shop-item"
                style={{ position: "relative" }}
              >
                <img src="/assets/images/item4.png" alt="" />
                <h4 className="right">View all</h4>
              </Col>
            </Row>
          </div>
        </section>
        <section className="pack">
          <div className="container-custom recharge-web">
            <h3>Recharge your Saving</h3>
            <p style={{ textAlign: "center" }}>
              Shop all your favourite clothes with much reasonable price
            </p>
            <hr className="line" />
            <Row className="">
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}
                style={{
                  alignSelf: "flex-end",
                  marginBottom: "10px",
                  position: "relative",
                }}
              >
                <img src="/assets/images/png/pack/2.png" alt="" />
                <button className="btn-1" style={{ maxWidth: "94%" }}>
                  30% Sale
                </button>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}
                style={{ marginBottom: "10px", position: "relative" }}
              >
                <img src="/assets/images/png/pack/1.png" alt="" />
                <div className="pack-title-1">
                  <h4 style={{ textAlign: "center" }}>
                    20% Sale
                    <br />
                    on Student ID
                  </h4>
                </div>
                <button className="btn-2">Shop Now</button>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}
                style={{
                  alignSelf: "flex-end",
                  marginBottom: "10px",
                  position: "relative",
                }}
              >
                <img src="/assets/images/png/pack/3.png" alt="" />
                <div
                  className="pack-title-2"
                  style={{
                    fontSize: "22px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Deal of the season
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="bestproduct">
          <div className="container-custom container-best-product">
            <h3>Best product selling for us</h3>
            <hr className="line" />
            <br />
            <br />
            {/* <Row className="justify-content-center">
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/2.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/3.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/5.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className=""
                id="product"
              >
                <Card>
                  <div className="mobile-bookmark-outer">
                    <FiBookmark className="bookmark-icon mobile-bookmark" />
                  </div>
                  <Card.Img variant="top" src="/assets/images/png/product_listing/6.png" />
                  <Card.Body>
                    <Card.Title>
                      Two toned cotton
                      <FiBookmark className="bookmark-icon desktop-bookmark" />
                    </Card.Title>
                    <Card.Text>
                      Rs.580
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row> */}
            <div className="best-grid">
              <Card>
                <div className="mobile-bookmark-outer">
                  <FiBookmark className="bookmark-icon mobile-bookmark" />
                </div>
                <Card.Img variant="top" src="/assets/images/png/product_listing/6.png" />
                <Card.Body>
                  <Card.Title>
                    Two toned cotton
                    <FiBookmark className="bookmark-icon desktop-bookmark" />
                  </Card.Title>
                  <Card.Text>
                    Rs.580
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <div className="mobile-bookmark-outer">
                  <FiBookmark className="bookmark-icon mobile-bookmark" />
                </div>
                <Card.Img variant="top" src="/assets/images/png/product_listing/2.png" />
                <Card.Body>
                  <Card.Title>
                    Two toned cotton
                    <FiBookmark className="bookmark-icon desktop-bookmark" />
                  </Card.Title>
                  <Card.Text>
                    Rs.580
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <div className="mobile-bookmark-outer">
                  <FiBookmark className="bookmark-icon mobile-bookmark" />
                </div>
                <Card.Img variant="top" src="/assets/images/png/product_listing/3.png" />
                <Card.Body>
                  <Card.Title>
                    Two toned cotton
                    <FiBookmark className="bookmark-icon desktop-bookmark" />
                  </Card.Title>
                  <Card.Text>
                    Rs.580
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <div className="mobile-bookmark-outer">
                  <FiBookmark className="bookmark-icon mobile-bookmark" />
                </div>
                <Card.Img variant="top" src="/assets/images/png/product_listing/5.png" />
                <Card.Body>
                  <Card.Title>
                    Two toned cotton
                    <FiBookmark className="bookmark-icon desktop-bookmark" />
                  </Card.Title>
                  <Card.Text>
                    Rs.580
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <button className="bestproduct-btn mb-5"
            routerLink="productlists/NULL/All Products">
            <a href="/product-list" style={{ fontSize: "12px" }}>
              VIEW ALL PRODUCTS
            </a>{" "}
            <BsArrowRight style={{ marginLeft: "20px" }} />
            <span
              style={{ marginLeft: "12px" }}
              className="iconify"
              data-icon="bi:arrow-right"
              data-inline="false"
            ></span>
          </button>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
