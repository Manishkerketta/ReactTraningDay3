import React from 'react'
import styled from 'styled-components';
const NavLink = styled.a`
  
  color: black;
  &:hover {
    color: red;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Task4 = () => {
  return (
    <div><NavLink href="#">LINK</NavLink></div>
  )
}

export default Task4