import { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from "react-router-dom";

import { createcategorySuccess} from '../../redux-tool/CategoryRedux';
import { ToastContainer, toast } from 'react-toastify';
import { fetchCategories } from '../../redux-tool/CategoryGetredux';

function CreatePtype() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categoryCreated = useSelector(createcategorySuccess)


  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState({
        categoriesPtype:"",
        Ptype:""
  });
  const categories = useSelector((state) => state.categories.data);

  const {categoriesPtype,Ptype}= category;
  const onChange = (e) =>{
    console.log("event", e.target.name, e.target)
    setCategory({...category,[e.target.name]:e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setShowModal(false);
    setCategory("")
  };
  useEffect(() => {
    dispatch(fetchCategories());
  },[dispatch]);

  return (
    <>
    {/* <ToastContainer /> */}
      <Button  size="md" className="products-btn" variant="" onClick={() => setShowModal(true)}>Add Ptype</Button>{' '}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="category">
              <Form.Label>Ptype:</Form.Label>
              <Form.Control
               type="text"
               name='category'
               value={Ptype} 
               onChange={(e) => onChange(e)} />
            </Form.Group>

            <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Select name="category" value={categoriesPtype} onChange={(e) => onChange(e)}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                <option value={category._id}>{category.category}</option>
            ))}
                </Form.Select>
            
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

export default CreatePtype;