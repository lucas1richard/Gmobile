import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import Platform from 'Platform';

export default styled(TextInput)`
  height: 40;
  padding-left: 15;
  ${Platform.OS === 'ios' ? `
    background-color: #fff;
    border-color: gray;
    border-width: 1;
    border-radius: 4;
  ` : null}
`;