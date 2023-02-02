import styled from 'styled-components';
import Logo from "../assests/images/logo.jpeg";
import Logo2 from "../assests/images/logo2.jpeg";

export default function Top(){
    return (
        <>
        <TopPage>
        <LogoInfo>
        <img src={Logo2} alt=""/>
        </LogoInfo>
        </TopPage>
        </>
    );
}

const TopPage = styled.div`
width:100vw;
height:100px;
background-color: #4796BD;
display:flex;
align-items:center;
justify-content:flex-start;
`

const LogoInfo = styled.div`
margin-left:100px;
img{
    width:120px;
    height:95px;
}
`