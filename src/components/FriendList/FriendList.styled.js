import styled from 'styled-components';

export const List = styled.ul`
align-items: center;
box-shadow:${props => props.theme.shadow}
padding: ${props => props.theme.spacing.small};
margin-bottom:  ${props => props.theme.spacing.large};
`;
export const ListItem = styled.li`
border: 1px solid cadetblue;
background-color: ${props => props.theme.colors.mainBackgroundcolor};
margin: ${props => props.theme.spacing.small};
padding-left: ${props => props.theme.spacing.small};
box-shadow: ${props => props.theme.shadow}
border-radius:10px;
:hover{
    background-color: violet;
    scale: 1.1;
    transition-duration: 250ms;   
}`;
