import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Ul = styled.ul`
  z-index: 10;
  list-style: none;
  flex-flow: row nowrap;
  text-align: center;
  li {
    padding: 18px 10px;
  }
  .link {
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    border-bottom: 0px solid;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid;
    }
  }
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  background-color: #13171d;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
`;

const RightNav = ({ open, onClickHiddenModal }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
    onCloseModal();
  };

  const onCloseModal = () => {
    onClickHiddenModal();
  };

  return (
    <Ul open={open}>
      {/* <li>
        <span className='link' onClick={scrollToTop}> 
            Home
        </span>
      </li> */}
      <li>
        <a className="link" href="#videos" onClick={onCloseModal}>
          Videos
        </a>
      </li>
      <li>
        <a className="link" href="#fotos" onClick={onCloseModal}>
          Fotos
        </a>
      </li>
      <li>
        <a className="link" href="#contacto" onClick={onCloseModal}>
          Contacto
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
