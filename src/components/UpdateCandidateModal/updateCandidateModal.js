import { Button, Modal, Form } from "react-bootstrap";
import apiService from "../../sevices/api";
import "./updateCandidateModal.scss";
import React, { useState } from "react";

function UpdateCandidateModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (e) => {
    e.preventDefault();
    const formFields = e.target.elements;

    const candidate = {
      id: props.candidate.id,
      firstName: formFields.formFirstname.value,
      lastName: formFields.formLastname.value,
      email: formFields.formEmail.value,
      age: formFields.formAge.value,
      street: formFields.formStreet.value,
      town: formFields.formTown.value,
      zipCode: formFields.formZipcode.value,
      processStep: props.candidate.processStep,
    };

    apiService.updateCandidate(candidate).then(window.location.reload(false));
  };
  const deleteCandidate = () => {
    apiService
      .deleteCandidate(props.candidate.id)
      .then(window.location.reload(false));
  };
  return (
    <>
      <a onClick={handleShow}>
        <img alt="edit icon" src="Edit_icon.png" />
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uppdatera kandidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="formFirstname">
              <Form.Label>Förnamn</Form.Label>
              <Form.Control
                defaultValue={props.candidate.firstName}
                type="text"
                placeholder="Förnamn"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastname">
              <Form.Label>Efternamn</Form.Label>
              <Form.Control
                defaultValue={props.candidate.lastName}
                type="text"
                placeholder="Efternamn"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Ålder</Form.Label>
              <Form.Control
                defaultValue={props.candidate.age}
                type="text"
                placeholder="Ålder"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStreet">
              <Form.Label>Gata</Form.Label>
              <Form.Control
                defaultValue={props.candidate.street}
                type="text"
                placeholder="Gata"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTown">
              <Form.Label>Stad</Form.Label>
              <Form.Control
                defaultValue={props.candidate.town}
                type="text"
                placeholder="Stad"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formZipcode">
              <Form.Label>Postnummer</Form.Label>
              <Form.Control
                defaultValue={props.candidate.zipCode}
                type="text"
                placeholder="Postnummer"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email adress</Form.Label>
              <Form.Control
                defaultValue={props.candidate.email}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Button className="button" variant="primary" type="submit">
              Spara
            </Button>
            <Button
              className="button"
              onClick={deleteCandidate}
              variant="primary"
            >
              Ta bort kandidat
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default UpdateCandidateModal;
