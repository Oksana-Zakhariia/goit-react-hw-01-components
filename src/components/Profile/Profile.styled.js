import styled from 'styled-components';
export const ProfileConatiner = styled.div`
  box-shadow: ${props => props.theme.shadow};
  margin-bottom: ${props => props.theme.spacing.large};
  padding-top: ${props => props.theme.spacing.large};
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.greyText};
`;
export const UserName = styled.p`
  color: ${props => props.theme.colors.mainText};
  font-weight: ${props => props.theme.fonts.boldWeight};
`;
export const UserPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Stats = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid slateblue;
  background-color: ${props => props.theme.colors.mainBackgroundcolor};
`;
export const StatsLabel = styled.span`
  font-size: ${props => props.theme.fonts.mainFontSize};
  color: ${props => props.theme.colors.greyText};
`;
export const StatsQuantity = styled.span`
  font-weight: ${props => props.theme.fonts.boldWeight};
`;
