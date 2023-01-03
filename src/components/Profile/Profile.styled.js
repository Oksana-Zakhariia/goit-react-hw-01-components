import styled from "styled-components";
export const ProfileConatiner = styled.div`
width: 600px;
margin-right: auto;
margin-left: auto;
border: 2px solid darkkhaki;`;
export const UserInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size:18px`;
export const UserPhoto = styled.img`
width: 100px;
height:100px;
border-radius: 50%`;
export const Stats = styled.ul`
width:100%;
display: flex;
justify-content: space-around;
font-size:18px`
export const StatsItem = styled.li`
width:calc(100% / 3);
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid slateblue;
background-color: lightsteelblue;
`;