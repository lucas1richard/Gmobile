import { TabNavigator } from 'react-navigation';

// @flow
import React, { Component } from 'react';
import styled from 'styled-components/native';
import api from 'utils/api';
import { AsyncStorage } from 'react-native';
import { ThemeProvider } from 'styled-components';
import iftheme from 'theme/iftheme';
import { navigation } from './src/pages';

const AppWrapper = styled.View`
  flex: 1;
  padding-left: 3;
  padding-right: 3;
  padding-top: 20;
  padding-bottom: 3;
`;

const Grand = TabNavigator(navigation, {
  tabBarOptions: {
    labelStyle: {
      color: iftheme.darkGreen
    },
    activeBackgroundColor: '#ddd'
  }
});

export default class App extends Component<{}> { // eslint-disable-line
  constructor() {
    super();
    Promise.all([
      AsyncStorage.getItem('@Grand:token'),
      AsyncStorage.getItem('@Grand:uuid')
    ])
    .then(([token, uuid]) => {
      if (token) {
        api.token = token;
      }
      if (uuid) {
        api.uuid = uuid;
      }
      console.dir(api);
      api('post', '/authenticate', {
        email: 'person@person.com',
        password: 'Password1!'
      })
      .then((res) => {
        console.log(res);
        return AsyncStorage.getItem('@Grand:token');
      })
      .then((token) => console.log(token));
    });
  }

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
