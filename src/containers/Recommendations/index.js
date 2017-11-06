import React from 'react';

import { View } from 'react-native';
import iftheme from 'theme/iftheme';
import Text from 'components/Text';
import Icon from 'components/Icon';

console.log(iftheme);

class Recommendations extends React.Component {
  static navigationOptions = {
    title: 'Recommendations',
    tabBarIcon: <Icon height="24" width="24" fill="darkGreen" name="checklist" />
  };

  render() {
    return (
      <View>
        <Text>Recommendations</Text>
      </View>
    );
  }
}

export default Recommendations;
