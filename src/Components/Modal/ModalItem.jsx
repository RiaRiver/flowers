import React from 'react';
import styled from 'styled-components';
import Button from "../Interface/Button";
import CountItem from "./CountItem";
import useCount from "../Hooks/useCount";
import { getItemTotalPrice } from "../Functions/supportingFunctions";
import {formatCurrencyUSD} from "../Functions/supportingFunctions";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 99;
`;

const Modal = styled.div`
 background-color: #fff5ff;
 width: 600px;
 height: 560px;
 border-radius: 10px;
 overflow: hidden;
`;

const Banner = styled.div`
  width: 100%;
  height: 360px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center top;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 360px);
  padding: 32px;
`;

const ContentHeader = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 20px;
 font-size: 24px;
 font-family: Raleway, sans-serif;
 font-weight: bold;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Overlay
      id="overlay"
      onClick={closeModal}
    >
      <Modal>
        <Banner img={openItem.img}/>
        <Content>
          <ContentHeader>
            <div>{openItem.name}</div>
            <div>{formatCurrencyUSD(openItem.price)}</div>
          </ContentHeader>
          <CountItem {...counter}/>
          <TotalPriceItem>
            <span>Price:</span>
            <span>{formatCurrencyUSD(getItemTotalPrice(order))}</span>
          </TotalPriceItem>
          <Button onClick={addToOrder}>Add to Order</Button>
        </Content>
      </Modal>
    </Overlay>
  );
};

export default ModalItem;