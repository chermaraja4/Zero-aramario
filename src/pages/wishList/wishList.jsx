
import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { FiBookmark, FiTrash2 } from "react-icons/fi";
import "./wishList.scss";
import { useState } from "react";


function WishList() {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([]);
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
      header: "Categories",
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
      header: "Gender",
      eventKey: "1",
      subCategories: [
        {
          label: "Male"
        },
        {
          label: "Female"
        },
      ]
    },
    {
      header: "Sort by",
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
    }
  ]
  useEffect(() => {
    setFilterProducts(filterData);
    setProducts(productsListData);
    // axios.get("/api/product/get-products").then((res) => {
    //   // setProducts(Accordiondata);
    //   setFilterProducts(Accordiondata);
    // }).catch((err) => {
    //   console.log(err)
    // })
  }, [])
  return (
    <section>

      <Container fluid="sm | xs" className="container-fluid products-main-container">
        <Row className="mx-0 px-1 mt-5">
          <p className="list_side_sorting">Home/Wishlist</p>
          <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 pt-3 filter-container">
            <p className="im-looking-for">Im looking for</p>
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
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h3 className="round-neck mt-4">WishList</h3>
              </div>
            </Row>
            <div className="product_list_container">
              <Row className="mt-3 mx-0">
                {
                  products.map(item => {
                    return (
                      <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6} id="product">
                        <Card>
                          <div className="delete-icon-wishlist-outer">
                            <FiTrash2 className="deleteIcon" />
                          </div>
                          <Card.Img
                            variant="top"
                            src={item.imageUrl}
                            style={{ width: "100%", maxHeight: "", borderRadius: "6%" }}
                          />
                          <div className="add-to-cart-button">
                            <p className="text-white text-center mb-0">Add to cart</p>
                          </div>
                          <Card.Body>
                            <Card.Title>
                              {item.productName}
                            </Card.Title>
                            <Card.Text>Rs.{item.price}</Card.Text>
                          </Card.Body>

                        </Card>
                      </Col>
                    );
                  })
                }
              </Row>
            </div>
          </div>
        </Row>
      </Container>
      <div className="surf-more-products-section text-center">
        <p>Surf for more products</p>
        <Button size="md" className="view-products-btn" variant="">View more products</Button>{' '}
      </div>
    </section>

  );
}

export default WishList;
