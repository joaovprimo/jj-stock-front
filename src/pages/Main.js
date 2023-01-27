import Top from "../components/Top.js";
import SideBar from "../components/SideBar.js";
import styled from "styled-components";
import UserContext from "../context/context.js";
import { useContext } from "react";
import Container2 from "../components/Container2.js";

export default function Main (){
    const { store } = useContext(UserContext);
    
    return(
        <>
        <Top/>
          <Container2>
           <Content>
            <Profile> Profile </Profile>
            <InfoStore>
              <StoreName><p>{store.name}</p></StoreName> 
              <StoreEmail><p>{store.email}</p></StoreEmail>   
              <StoreCnpj><p>{store.cnpj}</p></StoreCnpj>
            </InfoStore>
           </Content>
          </Container2>
        </>
    );
}


const Content = styled.div`
margin-top:40px;
width: 100vw;
height:100vh;
`
const Profile = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
`

const InfoStore = styled.div`
width: 100%;
height:200px;
margin-top:50px;
`
const StoreName = styled.div`
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: #122E40;
`


const StoreEmail = styled.div`
font-size: 30px;
line-height: 38px;
color: #122E40;
`


const StoreCnpj = styled.div`
font-size: 20px;
line-height: 38px;
color: #122E40;
`