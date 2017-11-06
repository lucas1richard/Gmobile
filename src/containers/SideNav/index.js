import React from 'react';

import { View } from 'react-native';
import Text from 'components/Text';

const SideNav = () => (
  <View>
    <Text>DASHBOARD</Text>
    <Text>Jackpot SavingsActivity</Text>
    <Text>Drawings</Text>
    <Text>Recommendations</Text>
    <Text>Credit Score</Text>
    <Text>PROFILE</Text>
    <Text>Basic Info</Text>
    <Text>Linked Accounts</Text>
    <Text>Savings Preferences</Text>
    <Text>Investing</Text>
  </View>
);

SideNav.navigationOptions = {
  title: 'Menu'
};

export default SideNav;
