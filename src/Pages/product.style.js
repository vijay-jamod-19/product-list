import styled from "styled-components";

export const Container = styled.section`
    /* height: 500vh; */
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

export const LeftContainer = styled.section`
    /* height: 100%; */
    width: 20%;
    /* background-color: yellow; */
`;

export const CategoryHeader = styled.div`
    /* height: 50px; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    margin-top:10px;
`
export const FilterBody = styled.div`
    /* height:300px; */
    width: 100%;
    /* background-color: green; */
`

export const RightContainer = styled.section`
    height: 100%;
    width: 80%;
    /* background-color: green; */
`;

export const HeaderContainer = styled.div`
    height: 10vh;
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LeftHeader = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: green; */
`;

export const RightHeader = styled.div`
    height: 100%;
    width: 20%;
    /* background-color: black; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DropdownContainer = styled.select`
    width: 100%;
    height: 50%;
    border: 1px solid #00000099;
`;

export const BodyContainer = styled.div`
    /* height: 300vh; */
    width: 100%;
    /* background-color: maroon; */
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
 export const CardContainer = styled.div`
    /* width: 200px; */
    height: 400px;
    width: 250px;
    margin-top: 10px;
    margin-left: 10px;
    /* background-color: yellow; */
    border:1px solid #ccc;
    border-radius: 5px;
 `;

 export const Image = styled.image`
    height: 100%;
    width: 100%;
    border-radius:10px;
 `;

 export const RattingsContainer = styled.div`
    height: 25px;
    width: 80px;
    background-color: #ccc;
    position: absolute;
    margin-top: -30px;
    margin-left: 10px;
    justify-content: space-evenly;
    /* align-items: center; */
    display: flex;
    flex-direction: row;
 `;


