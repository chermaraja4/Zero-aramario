import React, { useState,useEffect } from 'react';
import { Form, Button, Row,Col,Modal } from 'react-bootstrap';
import "./CreateProduct.css";
import { CreatedProduct } from '../../redux-tool/ProductRedux';
import { fetchCategories } from '../../redux-tool/CategoryGetredux';
import { useDispatch, useSelector } from 'react-redux';

function CreateProduct() {
  const [category, setCategory] = useState('63ed2f726fde7d9ec7d2f335');
  const [product, setProduct] = useState({
    category:"",
    title:"",
    price:"",
    description:"",
    sizeChart:"",
    xsmall:"",
    xsmallQty:"",
    small:"",
    smallQty:"",
    medium:"",
    mediumQty:"",
    large:"",
    largeQty:"",
    exLarge:"",
    exLargeQty:"",
    dXL:"",
    dXLQty:"",
    file:""
  });

  
  const dispatch = useDispatch();
   const categories = useSelector((state) => state.categories.data);    
   console.log(categories,"categoriescategoriescategoriescategoriescategories")
   const [showModal, setShowModal] = useState(false);

  const datass = useSelector((state) => state.category.data);
  const isLoading = useSelector((state) => state);
  const error = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(CreatedProduct(product));
  };

  const onChange = (e) =>{
    console.log("event", e.target.name, e.target)
    setProduct({...product,[e.target.name]:e.target.value})
  }

  const handleFileChange = (event) => {
    // setFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    console.log("event", event)
    // setCategory(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  },[dispatch]);

  return (
    <>
<Button  size="md" className="products-btn" variant="" onClick={() => setShowModal(true)}>Add Product</Button>{' '}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
        <Form.Group controlId="category">
        <Form.Label>Category:</Form.Label>
        <Form.Select name="category" value={product.category} onChange={(e) => onChange(e)}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option value={category._id}>{category.category}</option>
    ))}
        </Form.Select>
        
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" name="title" value={product.title} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" name="price" value={product.price} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" name="description" rows={4} value={product.description} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="sizeChart">
            <Form.Label>Size Chart:</Form.Label>
            <Form.Control type="text" name="sizeChart" value={product.sizeChart} onChange={(e) => onChange(e)} />
          </Form.Group>
        
          <Form.Group controlId="xsmall">
            <Form.Check type="checkbox" name="xsmall" label="X-Small" checked={product.xsmall} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="xsmallQty">
            <Form.Label>X-Small Quantity:</Form.Label>
            <Form.Control type="number" name="xsmallQty" value={product.xsmallQty} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="small">
            <Form.Check type="checkbox" name="small" label="Small" checked={product.small} onChange={(e) => onChange(e)} />
          </Form.Group>


          <Form.Group controlId="xsmallQty">
            <Form.Label>X-Small Quantity:</Form.Label>
            <Form.Control type="number" name="xsmallQty" value={product.xsmallQty} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="small">
            <Form.Check type="checkbox" name="small" label="Small" checked={product.small} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="smallQty">
            <Form.Label>Small Quantity:</Form.Label>
            <Form.Control type="number" name="smallQty" value={product.smallQty} onChange = {(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="medium">
            <Form.Check type="checkbox" name="medium" label="Medium" checked={product.medium} onChange={(e) => onChange(e)} />
          </Form.Group>

          <Form.Group controlId="mediumQty">
        <Form.Label>Medium Quantity:</Form.Label>
        <Form.Control type="number" name="mediumQty" value={product.mediumQty} onChange={(e) => onChange(e)} />
      </Form.Group>

      <Form.Group controlId="large">
        <Form.Check type="checkbox" name="large" label="Large" checked={product.large} onChange={(e) => onChange(e)} />
      </Form.Group>

      <Form.Group controlId="largeQty">
        <Form.Label>Large Quantity:</Form.Label>
        <Form.Control type="number" name="largeQty" value={product.largeQty} onChange={(e) => onChange(e)} />
      </Form.Group>

      <Form.Group controlId="exLarge">
        <Form.Check type="checkbox" name="exLarge" label="Extra Large" checked={product.exLarge} onChange={(e) => onChange(e)} />
      </Form.Group>

      <Form.Group controlId="exLargeQty">
        <Form.Label>Extra Large Quantity:</Form.Label>
        <Form.Control type="number" name="exLargeQty" value={product.exLargeQty} onChange={(e) => onChange(e)} />
      </Form.Group>

      <Form.Group controlId="dXL">
        <Form.Check type="checkbox" name="dXL" label="Double XL" checked={product.dXL} onChange={(e) => onChange(e)} />
      </Form.Group>

      <Form.Group controlId="dXLQty">
        <Form.Label>Double XL Quantity:</Form.Label>
        <Form.Control type="number" name="dXLQty" value={product.dXLQty} onChange={(e) => onChange(e)} />
      </Form.Group>

      <Form.Group controlId="file">
        <Form.Label>Image:</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
            <Button 
            type="submit"
            className='mt-3'
            >Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
      </> 
      );
}
export default CreateProduct;

