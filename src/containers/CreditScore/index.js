import React from 'react';

import { View } from 'react-native';
import iftheme from 'theme/iftheme';
import Text from 'components/Text';
import Icon from 'components/Icon';

console.log(iftheme);

class CreditScore extends React.Component {
  static navigationOptions = {
    title: 'Credit Score',
    tabBarIcon: <Icon height="24" width="24" fill="darkGreen" name="debt" />
  };

  render() {
    return (
      <View>
        <Text>Credit Score</Text>
      </View>
    );
  }
}

export default CreditScore;
