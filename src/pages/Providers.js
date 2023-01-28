import styled from "styled-components";
import Top from "../components/Top.js";
import Container2 from "../components/Container2.js";
import ProvidersInfos from "../components/ProvidersInfo.js";
import { useEffect, useContext } from "react";
import UserContext from "../context/context.js";
import { getProvider } from "../axios/axios.js";
import { ImSearch } from "react-icons/im";

export default function Providers (){
  const { provider, setProvider } = useContext(UserContext);

  useEffect(()=>{
      const promisse = getProvider();
      promisse.then(
        (res)=> {
          setProvider(res.data)
          console.log(res.data);
        }
      ).catch((error)=>{
        console.log(error.message);
      });
  },[])

  return(
        <>
        <Top/>
        <Container2>
        <Content>
        <SubContent>
        <Provider> Fornecedores </Provider>
        <Search>
        <ImSearch/>
        </Search>
        </SubContent>
          <Menu2>
            <TopProviders>
              <Topname><p>Name</p></Topname>
              <Topcnpj><p>CNPJ</p></Topcnpj>
              <Topemail><p>Email</p></Topemail>
            </TopProviders>
            {provider.length === 0 ? 
            <></>
            :
            (provider.map((providers,index)=>(
              <ProvidersInfos 
                key={index}
                name={providers.name}
                email={providers.email}
                cnpj={providers.cnpj}
                />
            )
            )
            )}

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
const SubContent = styled.div`
display:flex;
`
const Search = styled.div`
margin-left:1305px;
font-size: 32px;
`