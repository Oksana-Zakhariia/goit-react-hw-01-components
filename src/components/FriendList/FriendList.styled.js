import styled from 'styled-components';

export const List = styled.ul`
align-items: center;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
rgb(0 0 0 / 12%) 0px 1px 8px 0px;
padding: 20px;
margin-bottom: 40px;
`
export const ListItem = styled.li`
border: 1px solid cadetblue;
background-color: lightblue;
margin: 20px;
padding-left: 30px;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
rgb(0 0 0 / 12%) 0px 1px 8px 0px;
border-radius:10px;
:hover{
    background-color: violet;
    scale: 1.1;
    transition-duration: 250ms;   
}`;