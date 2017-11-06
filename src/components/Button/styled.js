import styled from 'styled-components/native';
import { View } from 'react-native';
import Text from 'components/Text';

export const Wrapper = styled(View)`
  background: ${(props) => props.color ? props.theme[props.color] : props.theme.white};
  border-color: ${(props) => props.color ? props.theme[props.color] : props.theme.blue};
  align-items: center;
  border-width: 1;
  border-radius: 4;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 16;
  padding-right: 16;
`;

export const Title = styled(Text)`
  font-size: 18;
  color: ${(props) => props.color ? props.theme.white : props.theme.blue};
`;
