import { View } from 'react-native';
import styled from 'styled-components/native';

export default styled(View)`
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: space-between;
  ${(props) => props.align ? `
    align-items: ${props.align}
  ` : null}
`;