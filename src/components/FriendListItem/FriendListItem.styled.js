import styled from 'styled-components';
export const FriendCard = styled.div`
width: 100%;
display: flex;
gap:30px;
align-items: center;
padding:10px;
`;
export const Status = styled.span`
width:30px; 
height:30px;
border-radius: 50%;
background-color: ${props => { return props.isActive ? 'green' : 'red' }}
`;
export const FriendName = styled.p`
font-weight: 700`