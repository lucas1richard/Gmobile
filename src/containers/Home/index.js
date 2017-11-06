import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import FlexWrapper from 'components/FlexWrapper';
import Text from 'components/Text';
import Button from 'components/Button';
import Input from 'components/Input';
import Label from 'components/Label';
import Icon from 'components/Icon';
import pages from 'app/pages';
import { Wrapper } from './styled';


class Home extends React.Component {
  static navigationOptions = {
    title: 'Jackpot Savings',
    tabBarIcon: <Icon height="24" width="24" fill="darkGreen" name="moneyBox" />
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlexWrapper>
        <View>
          <Text centered color="mostOpacityBlue">Enter your username and password</Text>
          <Wrapper>
            <Label>Email</Label>
            <Input value="" />
          </Wrapper>
          <Wrapper>
            <Label>Password</Label>
            <Input value="" />
          </Wrapper>
        </View>
        <Wrapper>
          <Button
            onPress={() => console.log('login')}
            title="Login"
            color="darkBlue"
          />
        </Wrapper>
        <FlexWrapper direction="row" align="center">
          <Button
            onPress={() => navigate(pages.CREATE_ACCOUNT)}
            title="Go to Test Page"
            color="darkBlue"
          />
        </FlexWrapper>
      </FlexWrapper>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
