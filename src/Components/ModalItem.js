import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

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
  margin-bottom: 20px;
`;

const ItemInfo = styled.h2`
 display: flex;
 justify-content: space-between;
 padding: 0 40px;
`;

const ModalItem = ({ openItem, setOpenItem }) => {
  if (!openItem) return null;

  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  return (
    <Overlay
      id="overlay"
      onClick={closeModal}
    >
      <Modal>
        <Banner img={openItem.img}/>
        <ItemInfo>
          {openItem.name}
          <span>{openItem.price.toLocaleString('en-En',
            { style: 'currency', currency: 'USD' })}
          </span>
        </ItemInfo>
        <Button>Add to Cart</Button>
      </Modal>
    </Overlay>
  );
};

export default ModalItem;