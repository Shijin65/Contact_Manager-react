import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function ShowModal(props) {
    console.log(props.modalData)
  return (

    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className='mt-5' style={{marginTop:"250px"}}>
      <Modal.Header closeButton>
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ShowModal;