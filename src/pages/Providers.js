import styled from "styled-components";
import Top from "../components/Top.js";
import Container2 from "../components/Container2.js";
import ProvidersInfos from "../components/ProvidersInfo.js";

export default function Providers (){
    return(
        <>
        <Top/>
        <Container2>
        <Content>
        <Provider> Profile </Provider>
          <Menu2>
            <TopProviders>
              <Topname><p>Name</p></Topname>
              <Topcnpj><p>CNPJ</p></Topcnpj>
              <Topemail><p>Email</p></Topemail>
            </TopProviders>
            <ProvidersInfos>

            </ProvidersInfos>
          </Menu2>
        </Content>
        </Container2>
        </>
    );
}

const Content = styled.div`
margin-top:40px;
width: 80%;
height:100%;
`

const Provider = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
margin-bottom:50px;
`

const Menu2 = styled.div`
background-color: #FFFFFE;
min-width: 1200px;
min-height: 600px;
display:flex;
flex-direction:column;
align-items:space-around;
align-items:flex-start;
border-radius: 10px 10px 0px 0px;
`

const TopProviders = styled.div`
width:100%;
height:100px;
background-color: #E7EFF3;
border-radius: 10px 10px 0px 0px;
display:flex;
align-items:center;
justify-content:space-around;
`

const Topname = styled.div`

p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`

const Topcnpj = styled.div`

p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`

const Topemail = styled.div`

p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
