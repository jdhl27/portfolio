import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export const ContactUs = () => {
  const MySwal = withReactContent(Swal);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE = process.env.REACT_APP_SERVICE_EMAIL
    const TEMPLATE = process.env.REACT_APP_TEMPLATE_EMAIL
    const USER = process.env.REACT_APP_USER_EMAIL

    emailjs
      .sendForm(
        SERVICE,
        TEMPLATE,
        form.current,
        USER
      )
      .then(
        async (result) => {
          if (result.text === "OK") {
            await MySwal.fire({
              title: <strong>Gracias</strong>,
              html: <i>Pronto estaremos en contacto</i>,
              icon: "success",
            });
          }
          form.current.reset();
        },
        async (error) => {
          await MySwal.fire({
            title: <strong>Error</strong>,
            html: <i>Inténtalo de nuevo o enviame un correo a Ferhernandez96@gmail.com</i>,
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="container-border">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label for="name">
          Nombre <span className="required">*</span>
        </label>
        <input type="text" className="text-input" name="user_name" required />
        <label for="email">
          Correo Electrónico <span className="required">*</span>
        </label>
        <input type="email" className="text-input" name="user_email" required />
        <label for="message">
          Mensaje <span className="required">*</span>
        </label>
        <textarea name="message" required></textarea>
        <br />
        <input type="submit" value="Enviar" className="send" />
      </form>
    </div>
  );
};
