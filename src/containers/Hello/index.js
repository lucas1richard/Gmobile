
import { createStructuredSelector } from 'reselect';
/* @flow */
import type { Dispatch } from 'redux';
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import makeSelectHello from './selectors';

type Props = {
  dispatch: Dispatch<*>
}

export class Hello extends React.Component<{}> { // eslint-disable-line react/prefer-stateless-function
  props: Props;

  render() {
    return (
      <Text>
        My Connected component
      </Text>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  Hello: makeSelectHello()
});

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
