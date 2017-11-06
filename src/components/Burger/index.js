/**
*
* Burger
*
*/
import React from 'react';
import PropTypes from 'prop-types';
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

function Burger({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <Line {...rest} />
      <MiddleLine {...rest} />
      <Line {...rest} />
    </Wrapper>
  );
}

Burger.propTypes = {
  rest: PropTypes.object
};

export default Burger;
