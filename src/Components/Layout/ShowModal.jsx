import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function ShowModal(props) {

    const deletehandler = async(id) =>{
      if (window.confirm("are you sure you want to delete this contact?")) {


        console.log(id)
        const res = await fetch(`http://localhost:8001/api/contact/${id}`,
        {
          method:"DELETE",
          headers:{"content-type":"application/json",
          Authorization : `Bearer ${localStorage.getItem("auth")}`
          
      }
      })
      const userres =await res.json();
      }

      props.onHide()
    }
    console.log(props.modalData)
  return (

    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className='mt-5' style={{marginTop:"250px"}}>
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter"  className='mt-3'>
         Contact Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example ">
        <Container>
          <Row className="mt-4" >
            
            <Col xs={6} md={2}>
              name :
            </Col><Col xs={12} md={10}>
             <h3 className='text-uppercase'>{props.modalData.name}</h3>
            </Col>
          </Row>
          <Row className="mt-3" >
            
            <Col xs={6} md={2}>
              phone :
            </Col>
            <Col xs={12} md={10}>
             <h5>{props.modalData.phone}</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2}>
              Email :
            </Col>
            <Col xs={12} md={10}>
            <h5>{props.modalData.email}</h5>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <div className='d-flex gap-3 bg-danger p-2 justify-content-center shadow-sm ' style={{ borderRadius:"8px" ,cursor:"pointer" }} onClick={()=>{
          deletehandler(props.modalData._id);
          
          
          }}>
          <p className='mt-1 font-weight-bold'>Move to trash</p>
      <i className="fa-solid fa-trash-can fa-bounce fa-lg mt-3"></i>
      </div>
        
      </Modal.Footer>
    </Modal>
  );
}
export default ShowModal;