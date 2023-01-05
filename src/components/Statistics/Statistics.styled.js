import styled from 'styled-components';
export const StatsSection = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow};
  margin-bottom: ${props => props.theme.spacing.large};
`;
export const Title = styled.h2`
  text-align: center;
  padding: ${props => props.theme.spacing.large};
`;
export const List = styled.ul`
  display: flex;
  width: 100%;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  color: ${props => props.theme.colors.white};
  background-color: ${props => {
    return getRandomHexColor();
  }};
`;
export const StatsLabel = styled.span`
  font-size: ${props => props.theme.fonts.mainFontSize};
`;
export const Persentage = styled.span`
  font-weight: ${props => props.theme.fonts.boldWeight};
`;
