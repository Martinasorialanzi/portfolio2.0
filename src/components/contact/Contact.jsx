import React, { useRef } from "react";
import "../contact/contact.css";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fsiawbl",
        "template_8vcj1zs",
        form.current,
        "KsX1c61JvBFU31_lx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Swal.fire({
      icon: "success",
      title: "Tu mensaje fue enviado a Martina",
      showConfirmButton: false,
      timer: 1500,
      // background:"rgba(72, 72, 71, 0.941)",
      backdrop: `
      #9fd4caa2`,
    });

    e.target.reset();
  };
  return (
    <>
    <Container id="contacto" className="container">
      <Row className="p-0 rowSobreMi">
          <Col className="colTittleSkills">
        <div className="divTextContacto">
          DO YOU WANT TO MAKE ME AN OFFER, GIVE ME SOME FEEDBACK OR JUST SAY
          HELLO?
        </div>
        </Col>
        <Col className="colSobreMi justify-content-center ">
        <Container className="containerForm container ">
          <Form className="formContacto" ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formContacto">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="formControl"
                type="text"
                required
                maxLength={45}
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="formControl"
                type="email"
                name="user_email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                className="formControl"
                name="message"
                required
              />
            </Form.Group>

            <Button className="botonEnviar" type="submit" value="Send">
              Enviar
            </Button>
          </Form>
        </Container>
        </Col>
        </Row>

      </Container>
    </>
  );
};

export default Contact;
