import Top from "../components/Top.js";
import Container from "../components/Container.js";
import Menu from "../components/Menu.js";
import illustration from "../assests/images/imageLogin.avif";
import LoginForm from "../components/LoginForm.js";
import styled from "styled-components";


export default function LoginPage(){
    return(
        <>
        <Top/>
        <Container>
          <Menu>
            <Img src={illustration} alt="imageLogin"/>
            <LoginForm/>
          </Menu>  
        </Container>
        </>
    )
}

const Img = styled.img`
width:495px;
height:380px;
`

