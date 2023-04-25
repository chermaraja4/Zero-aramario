import { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from "react-router-dom";

import { CreatedCategory , createcategorySuccess} from '../../redux-tool/CategoryRedux';
import { ToastContainer, toast } from 'react-toastify';


function SubCatogory() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categoryCreated = useSelector(createcategorySuccess)
  const categories = useSelector((state) => state.categories.data);
  const datass = useSelector((state) => state.category.data);
  const isLoading = useSelector((state) => state);
  const error = useSelector((state) => state);

  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState({
    categoryId:datass.id,
    SubCatogory:""
  });

  const {categoryId,SubCatogory} = category;

  const handleCategoryChange = (event) => {
    setCategory({...category,[event.target.name]:event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(CreatedCategory(category))
    setShowModal(false);
    setCategory("")
   
  };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };


  useEffect(() => {
    
  },[]);

  return (
    <>
    {/* <ToastContainer /> */}
      <Button  size="md" className="products-btn" variant="" onClick={() => setShowModal(true)}>Sub Category</Button>{' '}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}> 
            <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Select
                 value={categoryId} 
                 name='category'
                 onChange={(e) =>handleCategoryChange(e)}>
                <option value="">Select a category</option>

                {categories.map((category) => (
                <option value={category.id}>{category.category}</option>
            ))}
                </Form.Select>
        
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Sub Category:</Form.Label>
              <Form.Control
               type="text"
               name='category'
               value={SubCatogory} 
               onChange={(e) =>handleCategoryChange(e)} />
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

export default SubCatogory;