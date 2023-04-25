import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { FiBookmark } from "react-icons/fi";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/footer/Footer";
import "./productlist.scss";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { getproductlist,productshowtodo } from "../../../redux-tool/ProductRedux";

function ProductList() {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(productshowtodo)
  // dummy datas
  let productsListData = [
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
    {
      productName: "Two toned cotton",
      imageUrl: '/assets/images/png/product_listing/1.png',
      price: '500'
    },
  ];
  let filterData = [
    {
      header: "Sleeve",
      eventKey: "0",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    },
    {
      header: "Color",
      eventKey: "1",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    },
    {
      header: "Size",
      eventKey: "2",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    },
    {
      header: "Offers",
      eventKey: "3",
      subCategories: [
        {
          label: "Half Sleev"
        },
        {
          label: "Full sleev"
        },
        {
          label: "Hoded"
        },
        {
          label: "Vest"
        }
      ]
    }
  ]
  useEffect(() => {
    setFilterProducts(filterData);
     setProducts(productsListData);


    dispatch(getproductlist())
    console.log("userdddddd", user)

  }, [])
  return (
    <section>
      <NavBar />
      <Container fluid="sm | xs" className="container-fluid products-main-container mt-5 pt-5">
        <div className="row mx-0 px-1 mt-5">
          <p className="list_side_sorting"><b>Home / Men /</b> Round neck here</p>
          <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 pt-3 filter-container">
            <p className="im-looking-for"><b>Im looking for</b></p>
            <Accordion defaultActiveKey="0">
              {
                filterProducts.map(item => {
                  return (
                    <Accordion.Item eventKey={item.eventKey}>
                      <Accordion.Header>{item.header} </Accordion.Header>
                      <Accordion.Body>
                        {
                          item.subCategories ? item.subCategories.map(subItem => {
                            return (
                              <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label={subItem.label} />
                              </Form.Group>
                            )
                          }) : ""
                        }
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
            <Row className="mx-0 align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <h3 className="round-neck mt-4">Round neck tees</h3>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right">
                <Button variant="outline-secondary" className="desktop-recommended-btn">
                  Most Recommened 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </Button>
                <Button variant="outline-secondary" className="w-75 filter-mobile-btn">Filter </Button>
              </div>
            </Row>
            <div className="product_list_container">
              <Row className="row mt-3 mx-0">
                {products.map(item => {
                    return (
                      <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} className="" id="product">
                        <Card>
                          <a href="/product-detail">
                            <div className="mobile-bookmark-outer">
                              <FiBookmark className="bookmark-icon mobile-bookmark" />
                            </div>
                            <Card.Img
                              variant="top"
                              src={item.imageUrl}
                              style={{ width: "100%", maxHeight: "", borderRadius: "6%" }}
                            />
                            <Card.Body>
                              <Card.Title>
                                {item.productName}
                                <FiBookmark className="bookmark-icon desktop-bookmark" />
                              </Card.Title>
                              <Card.Text>Rs.{item.price}</Card.Text>
                            </Card.Body>
                          </a>
                        </Card>
                      </Col>
                    );
                  
                  })
                }
              </Row>
            </div>
            <div className="pagination py-5 justify-content-center">
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>Next</span>
            </div>
          </div>
        </div>
      </Container>      
      <Footer />
    </section>

  );
}

export default ProductList;
