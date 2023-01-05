import styled from 'styled-components';
export const FriendCard = styled.div`
  width: 100%;
  display: flex;
  gap: ${props => props.theme.spacing.small};
  align-items: center;
  padding: ${props => props.theme.spacing.small};
`;
export const Status = styled.span`
  width: ${props => props.theme.spacing.large};
  height: ${props => props.theme.spacing.large};
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const FriendName = styled.p`
  font-weight: ${props => props.theme.fonts.boldWeight};
`;
