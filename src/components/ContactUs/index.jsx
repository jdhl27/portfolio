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

    emailjs
      .sendForm(
        "service_7o2x3v1",
        "template_pibpgkr",
        form.current,
        "pcfSeSm63LS9mQA_K"
      )
      .then(
        async (result) => {
          console.log(result.text);
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
            html: <i>Inténtalo de nuevo o enviame un correo a juan@test.com</i>,
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="container-border">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label for="name">
          Nombre<span className="required">*</span>
        </label>
        <input type="text" className="text-input" name="user_name" required />
        <label for="email">
          Correo Electrónico: <span className="required">*</span>
        </label>
        <input type="email" className="text-input" name="user_email" required />
        <label for="message">
          Mensaje: <span className="required">*</span>
        </label>
        <textarea name="message" required></textarea>
        <br />
        <input type="submit" value="Enviar" className="send" />
      </form>
    </div>
  );
};
