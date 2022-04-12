import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  height: 1.4rem;
  z-index: 20;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  cursor: pointer;
  // position: ${({ open }) => open ? 'fixed' : 'relative'};
  // right: ${({ open }) => open ? '21.5rem' : 0};
  div {
    width: ${({ open }) => open ? '2rem' : '1.5rem'};
    height: 0.2rem;
    background-color: ${({ open }) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 8px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(40deg)' : 'rotate(0)'};
    }
    // &:nth-child(2) {
    //   transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    //   opacity: ${({ open }) => open ? 0 : 1};
    // }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-40deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  })
  
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        {/* <div /> */}
        <div />
      </StyledBurger>
      <RightNav open={open} onClickHiddenModal = {() => setOpen(false)}/>
    </>
  )
}

export default Burger