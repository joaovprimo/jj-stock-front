import styled from "styled-components";
import Top from "../components/Top.js";
import Container2 from "../components/Container2.js";
import ProvidersInfos from "../components/ProvidersInfo.js";
import { useEffect, useContext, useState } from "react";
import UserContext from "../context/context.js";
import { getProvider, getProviderBy, createProvider } from "../axios/axios.js";
import { ImSearch } from "react-icons/im";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Providers (){
  const { provider, setProvider, store } = useContext(UserContext);
  const [findProvider, setFindProvider] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const [disableForm, setDisableForm] = useState(false);
  const [insertProvider, setInsertProvider] = useState({name:"", email:"", cnpj:""});
  console.log(store)
  useEffect(()=>{
      const promisse = getProvider(store.id);
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

  async function createProviderr(){
    setDisableForm(true);
    try{  
      const provider = await createProvider(insertProvider);
      setProvider(provider.data);
      setDisableForm(false);
      setModalOpened(false);
    }catch(error){
      console.log(error.message);
      setDisableForm(false);
      alert("Não foi possível criar o fornecedor, verifique as informações");
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
              <Provider3> Fornecedores </Provider3>
              <Menu3>
                <CreateForm onSubmit={submitSearch}>
                <Provider2><p>Adicionar Fornecedor</p></Provider2>
                <Input type="text" placeholder="Nome" onChange={event => setInsertProvider({...insertProvider, name: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Email" onChange={event => setInsertProvider({...insertProvider, email: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="CNPJ" onChange={event => setInsertProvider({...insertProvider, cnpj: event.target.value})} disable={disableForm} required/>
                <DivBut>
                <Save type="submit" disable={disableForm} onClick={createProviderr}><p>Salvar</p></Save>
                <Cancel type="submit" disable={disableForm} onClick={()=> setModalOpened(false)}><p>Cancelar</p></Cancel>
                </DivBut>
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
              <p><BsFillPlusCircleFill onClick={()=> setModalOpened(true)}/></p>
              <Topname><p>Name</p></Topname>
              <Topcnpj><p>CNPJ</p></Topcnpj>
              <Topemail><p>Email</p></Topemail>
            </TopProviders>
            <MenuInfo>
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
            </MenuInfo>
          </Menu2>
        </Content>
        </Container2>
          </>
        }
        </>
    );
}

const Content = styled.div`
margin-top:20px;
width: 80%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`

const Provider = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
height:60px;
width:150px;
display:flex;
flex-direction:flex-start;
`
const Provider2 = styled.p`
font-weight: 700;
font-size: 25px;
line-height: 38px;
color: #122E40;
margin-bottom:10px;
text-align:center;
margin-bottom:40px;
`;
const Provider3 = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
height:60px;
width:100%;
display:flex;
justify-content:flex-start;
`;

const Menu2 = styled.div`
background-color: #FFFFFE;
max-width: 95%;
height: 70%;
display:flex;
flex-direction:column;
align-items:flex-start;
border-radius: 10px 10px 10px 10px;
`

const TopProviders = styled.div`
width:100%;
height:105px;
background-color: #E7EFF3;
border-radius: 10px 10px 0px 0px;
display:flex;
align-items:center;
position:relative;
p{
  margin-left:35px;
  font-size:40px;
  color: #495D69;
  &:hover{
  cursor: pointer;
}
}
`

const Topname = styled.div`
 width:250px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    margin-left:115px;
}
`

const Topcnpj = styled.div`
 width:250px;
 margin-left:100px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const Topemail = styled.div`
 width:250px;
 margin-left:100px;
p{  
  margin-left:32px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const SubContent = styled.div`
display:flex;
margin-top:15px;
height:70px;
margin-bottom:15px;
overflow:hidden;
`
const Search = styled.form`
margin-left:600px;
font-size: 32px;
width:240px;
height:50px;
background-color:white;
display:flex;
border-radius: 5px 5px 0px 0px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
align-items:center;
&:hover{
    cursor: pointer;
}
p{
  display:flex;
  justify-content:center;
  font-size:25px;
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

const CreateForm = styled.form`
width:400px;
height:500px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px 10px 10px 10px;
background-color:#FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
p{
  margin-top:10px;
}
`

const Menu3 = styled.div`
min-width: 1200px;
min-height: 500px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px 10px 0px 0px;
`

const Input = styled.input`
width:300px;
height:50px;
margin-bottom:15px;
border-radius: 5px 5px 5px 5px;
padding:10px;
font-size:20px;
`

const Cancel = styled.button`
width:180px;
height:65px;
display:flex;
align-items:center;
justify-content:center;
border-radius: 5px 5px 5px 5px;
margin-top:15px;
p{
  font-size:22px;
  text-align:center;
}
&:hover{
  cursor: pointer;
  background-color:#FF0000;
  font-weight:700;
}
`;

const Save = styled.button`
width:180px;
height:65px;
display:flex;
align-items:center;
justify-content:center;
border-radius: 5px 5px 5px 5px;
margin-top:15px;
p{
  font-size:22px;
  text-align:center;
}
&:hover{
  cursor: pointer;
  background-color:#32CD32;
  font-weight:700;
}
`;

const DivBut = styled.div`
height:140px;
margin-top:5px;
display:flex;
flex-direction:column;
`;

const MenuInfo = styled.div`
overflow-y:scroll;
width:100%;
`