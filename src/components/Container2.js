import SideBar from "./SideBar.js";
import styled from "styled-components";

export default function Container2({children}){
    return(
        <>
        <Containerr2>
        <SideBar/>
        {children}
        </Containerr2>
        </>
    );
}

const Containerr2 = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
background-color:#F3F9FB;
width:100vw;
height:100vh;
`;
