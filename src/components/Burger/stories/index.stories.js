import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Burger from '../';

const Padding = styled.div`
  padding: 2rem;
  display: inline-block;
`;

storiesOf('Burger', module)
  .add('default', () => (
    <Padding>
      <Burger />
    </Padding>
  ));
