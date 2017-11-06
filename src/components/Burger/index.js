// @flow

/**
*
* Burger
*
*/
import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: center;
  height: 100%;
`;
const Line = styled.View`
  width: 21;
  height: 1;
  background: ${(props) => props.color ? props.theme[props.color] : '#bfbfbf'};
`;
const MiddleLine = styled.View`
  width: 21;
  height: 1;
  margin-top: 8;
  margin-bottom: 8;
  background: ${(props) => props.color ? props.theme[props.color] : '#bfbfbf'};
`;

function Burger() {
  return (
    <Wrapper >
      <Line />
      <MiddleLine />
      <Line />
    </Wrapper>
  );
}

export default Burger;
