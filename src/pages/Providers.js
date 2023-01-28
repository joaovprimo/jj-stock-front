import styled from "styled-components";
import Top from "../components/Top.js";
import Container2 from "../components/Container2.js";
import ProvidersInfos from "../components/ProvidersInfo.js";
import { useEffect, useContext, useState } from "react";
import UserContext from "../context/context.js";
import { getProvider, getProviderBy } from "../axios/axios.js";
import { ImSearch } from "react-icons/im";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Providers (){
  const { provider, setProvider } = useContext(UserContext);
  const [findProvider, setFindProvider] = useState("");
  const [modalOpened, setModalOpened] = useState(true);

  useEffect(()=>{
      const promisse = getProvider();
      promisse.then(
        (res)=> {
          setProvider(res.data);
          console.log(res.data);
        }
      ).catch((error)=>{
        console.log(error.message);
      });
  },[]);

  function submitSearch(e){
    e.preventDefault();
  }

  async function findProviderBy(){
    try{
      const providerr = await getProviderBy(findProvider);
      console.log(providerr.data)
      setProvider(providerr.data);
    }catch(error){
      alert("Fornecedor não encontrado");
    }
  }

  return(
        <>
        {
          modalOpened? 
          <>
          <Top/>
          <Container2>
            <Content>
              <Provider> Fornecedores </Provider>
              <Menu3>
                <CreateForm>

                </CreateForm>
              </Menu3>
            </Content> 
          </Container2>
          </>
          :
          <>
          <Top/>
        <Container2>
        <Content>
        <SubContent>
        <Provider> Fornecedores </Provider>
        <Search onSubmit={submitSearch}>
        <Find type="text" placeholder='Nome ou CNPJ' onChange={event => setFindProvider(event.target.value)} required/>
        <ImSearch onClick={findProviderBy}/>
        </Search>
        </SubContent>
          <Menu2>
            <TopProviders>
              <p><BsFillPlusCircleFill /></p>
              <Topname><p>Name</p></Topname>
              <Topcnpj><p>CNPJ</p></Topcnpj>
              <Topemail><p>Email</p></Topemail>
            </TopProviders>
            {provider.length === 0 ? 
            <></>
            :
            (provider.map((providers)=>(
              <ProvidersInfos 
                id={providers.id}
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
        }
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
p{
  margin-left:35px;
  font-size:40px;
  color: #495D69;
}
`

const Topname = styled.div`

p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    margin-left:155px;
}
`

const Topcnpj = styled.div`

p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    margin-left:463px;
}
`

const Topemail = styled.div`

p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    margin-left:230px;
}
`
const SubContent = styled.div`
display:flex;
`
const Search = styled.form`
margin-left:1110px;
font-size: 32px;
width:300px;
height:50px;
background-color:white;
display:flex;
border-radius: 5px 5px 0px 0px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
align-items:center;
&:hover{
    cursor: pointer;
}
`
const Find = styled.input`
border:none;
height:50px;
font-size: 20px;
width:200px;
padding:15px;
`
const Undo = styled.p`
`

const CreateForm = styled.div`
width:400px;
height:500px;
background-color:red;
`

const Menu3 = styled.div`
background-color: #FFFFFE;
min-width: 1200px;
min-height: 600px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px 10px 0px 0px;
`