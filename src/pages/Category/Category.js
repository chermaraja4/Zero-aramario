import { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from "react-router-dom";

import { CreatedCategory , createcategorySuccess} from '../../redux-tool/CategoryRedux';
import { ToastContainer, toast } from 'react-toastify';

function CategoryAdd() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categoryCreated = useSelector(createcategorySuccess)


  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('');
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    dispatch(CreatedCategory(category))
    // setShowModal(false);
    // setCategory("")
    // navigate("/")
  };

  return (
    <>
    {/* <ToastContainer /> */}
      <Button  size="md" className="products-btn" variant="" onClick={() => setShowModal(true)}>Add Category</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body> */}
          
            <Form.Group controlId="category">
              <Form.Label>Category:</Form.Label>
              <Form.Control
               type="text"
               name='category'
               value={category} 
               onChange={handleCategoryChange} />
            </Form.Group>
            <Button 
            type="submit"
            className='mt-3'
            onClick={()=>handleSubmit()}
            >Submit</Button>
          
        {/* </Modal.Body> */}
      </Modal>
    </>
  );
}

export default CategoryAdd;