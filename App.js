import React, { Component } from 'react';
import styled from 'styled-components/native';
import { /* StackNavigator, */ TabNavigator } from 'react-navigation';

import { ThemeProvider } from 'styled-components';

import iftheme from 'theme/iftheme';


// import BottomNav from 'containers/BottomNav';
import { navigation } from 'app/pages';

const AppWrapper = styled.View`
  flex: 1;
  padding-left: 3;
  padding-right: 3;
  padding-top: 20;
  padding-bottom: 3;
`;


const Grand = TabNavigator(navigation, {
  animationEnabled: true,
  tabBarOptions: {
    labelStyle: {
      color: iftheme.darkGreen
    },
    activeBackgroundColor: '#ddd'
  }
});


export default class App extends Component<{}> { // eslint-disable-line
  render() {
    return (
      <ThemeProvider theme={iftheme}>
        <AppWrapper>
          <Grand />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
