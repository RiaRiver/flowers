import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;

const CountButton = styled.button`
  background: transparent;
`;

const CountItem = ({ count, setCount, onChange }) => (
  <CountWrapper>
    <span>Count</span>
    <div>
      <CountButton disabled={count <= 1} onClick={() => {
        setCount(count - 1)
      }}>-</CountButton>
      <CountInput type="number" min="1" max="100" value={count < 1 ? 1 : count} onChange={onChange}/>
      <CountButton onClick={() => {
        setCount(count + 1)
      }}>+</CountButton>
    </div>
  </CountWrapper>
);

export default CountItem;