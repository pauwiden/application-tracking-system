import { Button, Modal, Form } from "react-bootstrap";
import apiService from "../../sevices/api";
import React, { useState } from "react";

function AddCandidateModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (e) => {
    e.preventDefault();
    const formFields = e.target.elements;
    const candidate = {
      firstName: formFields.formFirstname.value,
      lastName: formFields.formLastname.value,
      email: formFields.formEmail.value,
      age: formFields.formAge.value,
      street: formFields.formStreet.value,
      town: formFields.formTown.value,
      zipCode: formFields.formZipcode.value,
      processStep: 1,
    };

    console.log(candidate);
    apiService.addCandidate(candidate).then(window.location.reload(false));
  };
  return (
    <>
      <Button className="button" variant="primary" onClick={handleShow}>
        Lägg till kandidat
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lägg till kandidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="formFirstname">
              <Form.Label>Förnamn</Form.Label>
              <Form.Control type="text" placeholder="Förnamn" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastname">
              <Form.Label>Efternamn</Form.Label>
              <Form.Control type="text" placeholder="Efternamn" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Ålder</Form.Label>
              <Form.Control type="text" placeholder="Ålder" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStreet">
              <Form.Label>Gata</Form.Label>
              <Form.Control type="text" placeholder="Gata" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTown">
              <Form.Label>Stad</Form.Label>
              <Form.Control type="text" placeholder="Stad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formZipcode">
              <Form.Label>Postnummer</Form.Label>
              <Form.Control type="text" placeholder="Postnummer" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email adress</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Button className="button" variant="primary" type="submit">
              Spara
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default AddCandidateModal;
