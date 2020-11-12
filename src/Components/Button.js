import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: auto;
  display: block;
  min-width: 250px;
  padding: 16px;
  color: white;
  border-radius: 5px;
  border-color: transparent;
  background-color: #7332c8;
  font-size: 14px;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover{
    background-color: white;
    color: #7332c8;
    border-color: #7332c8;
  }
`;

export default Button;