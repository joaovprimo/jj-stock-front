import Top from "../components/Top.js";
import Container from "../components/Container.js";
import Menu from "../components/Menu.js";
import Img from  "../assests/images/eu.jpeg";
import styled from "styled-components";

export default function Main (){
    return(
        <>
        <Top/>
          <Container>
            <Menu>
                <Imgg src={Img} alt=""/>
            </Menu>
          </Container>
        </>
    );
}

const Imgg = styled.img`
width:200px;
height:200px;
`