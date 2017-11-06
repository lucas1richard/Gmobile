import React from 'react';

import { View } from 'react-native';
import Text from 'components/Text';
import Icon from 'components/Icon';

class Drawings extends React.Component {
  static navigationOptions = {
    title: 'Drawings',
    tabBarIcon: <Icon height="24" width="24" fill="darkGreen" name="star" />
  };

  render() {
    return (
      <View>
        <Text>Drawings</Text>
      </View>
    );
  }
}

export default Drawings;
