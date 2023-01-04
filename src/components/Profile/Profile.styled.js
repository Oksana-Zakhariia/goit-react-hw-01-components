import styled from "styled-components";
export const ProfileConatiner = styled.div`
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
rgb(0 0 0 / 12%) 0px 1px 8px 0px;
margin-bottom: 40px;
padding-top:40px;`;
export const UserInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: darkslategray;`;
export const UserName = styled.p`
color: black;
font-weight: 700;`
export const UserPhoto = styled.img`
width: 100px;
height:100px;
object-fit: cover;
border-radius: 50%`;
export const Stats = styled.ul`
width:100%;
display: flex;
justify-content: space-around;`
export const StatsItem = styled.li`
width:calc(100% / 3);
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid slateblue;
background-color: lightsteelblue;
`;
export const StatsLabel = styled.span`
font-size:18px;
darkslategray;`;
export const StatsQuantity = styled.span`
font-weight: 700;`