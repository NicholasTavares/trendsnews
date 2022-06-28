import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundLight};
`;

export const Describe = styled.Text`
  font-size: 20px;
  color: blue;
`;
