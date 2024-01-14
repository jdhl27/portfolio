import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./styles.css"; // Importa el archivo de estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/necio.audiovisual/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link icon-hover"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.instagram.com/necio.audiovisual/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link icon-hover"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.instagram.com/necio.audiovisual/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link icon-hover"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.instagram.com/necio.audiovisual/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link icon-hover"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
        <p className="copyright">
          © 2024 Necio Audiovisual. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
