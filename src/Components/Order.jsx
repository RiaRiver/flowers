import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import OrderListItem from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  
  background: white;
  min-width: 360px;
  height: calc(100% - 80px);
  padding: 24px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  z-index: 99;
`;

const OrderTitle = styled.h2`
 text-align: center;
 text-transform: uppercase;
`;

const OrderContent = styled.div`
 flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const EmptyList = styled.p`
  text-align: center;
`;

const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child{
  flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  margin: 0 34px 0 20px ;
  min-width: 85px;
  text-align: right;
`;

const Order = ({ orders }) => (
  <>
    <OrderStyled>
      <OrderTitle>Your order</OrderTitle>
      <OrderContent>
        {orders.length ?
          <OrderList>
            {orders.map((order) => <OrderListItem order={order}/>)}
          </OrderList> :
          <EmptyList>Order is empty.</EmptyList>}
      </OrderContent>
      <Total>
        <span>Total</span>
        <span>5</span>
        <TotalPrice>{(525).toLocaleString('en-En',
          { style: 'currency', currency: 'USD' })}</TotalPrice>
      </Total>
      <Button>Make an order</Button>
    </OrderStyled>
  </>
);

export default Order;