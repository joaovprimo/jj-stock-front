import styled from "styled-components";

export default function Container(props){
    return(
        <>
        <ContainerPage>
          {props.children}
        </ContainerPage>
        </>
    );
}

const ContainerPage = styled.div`
background-color:#F3F9FB;
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
`