import styled from "styled-components";
export const StatsSection = styled.section`
width: 100%;
background-color: white;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
 rgb(0 0 0 / 12%) 0px 1px 8px 0px;
 margin-bottom:40px`
export const Title = styled.h2`
text-align: center;
padding: 40px`;
export const List = styled.ul`
display: flex;
width: 100%; `;
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
color: white;
background-color: ${props => { return getRandomHexColor() }};
`; 
export const StatsLabel = styled.span`
font-size: 18px;`;
export const Persentage = styled.span`
font-weight: 700`;
