import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Icon from '../';

const Padding = styled.div`
  padding: 2rem;
`;

storiesOf('Icon', module)
  .add('default (bullish)', () => (
    <Padding>
      <Icon name="bullish" />
    </Padding>
  ))
  .add('30px (moneyBox)', () => (
    <Padding>
      <Icon name="moneyBox" width="30px" height="30px" />
    </Padding>
  ))
  .add('80px (check)', () => (
    <Padding>
      <Icon name="check" width="80px" height="80px" />
    </Padding>
  ))
  .add('lightRed (bullish)', () => (
    <Padding>
      <Icon name="bullish" width="30px" height="30px" fill="lightRed" />
    </Padding>
  ))
  .add('mediumBlue (bullish)', () => (
    <Padding>
      <Icon name="bullish" width="30px" height="30px" fill="mediumBlue" />
    </Padding>
  ))
  .add('blue (bullish)', () => (
    <Padding>
      <Icon name="bullish" width="30px" height="30px" fill="blue" />
    </Padding>
  ));
