import styled from 'styled-components';
export const AppContainer = styled.div`
  height: '100vh';
  justifycontent: 'center';
  alignitems: 'center';
  font-size: ${props => props.theme.fonts.largeFontSize};
  color: '#010101';
  width: 800px;
  background-color: ${props => props.theme.colors.blueBackgroundColor};
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  box-shadow: ${props => props.theme.shadow};
  padding: ${props => props.theme.spacing.large};
`;
