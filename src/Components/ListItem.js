import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 160px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  border-radius: 10px;
  font-size: 24px;
  color: white;
  z-index: 1;
  overflow: hidden;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #861e80;
    opacity: 30%;
    z-index: -1;
  }
  &:hover{
    cursor: pointer;
    box-shadow: inset 0 0 50px 20px #861e80;
    &:after{
    opacity: 0;
    }
  }
`;

const ListItem = ({ itemList }) => (
  <List>
    {itemList.map(item => (
      <Item key={item.id} img={item.img}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('en-En',
          { style: 'currency', currency: 'USD' })}
        </p>
      </Item>
    ))}
  </List>
);

export default ListItem;