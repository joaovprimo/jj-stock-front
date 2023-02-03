import styled from "styled-components";
import Container2 from "../components/Container2.js";
import { ImSearch } from "react-icons/im";
import Top from "../components/Top.js";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/context.js";
import { getProducts, createProduct, getProductBy } from "../axios/axios.js";
import ProductsInfo from "../components/ProductsInfo .js";
import { RotatingLines } from 'react-loader-spinner';

export default function Products(){
    const { product, setProduct, store } = useContext(UserContext);
    const [modalOpened, setModalOpened] = useState(false);
    const [disableForm, setDisableForm] = useState(false);
    const [insertProduct, setInsertProduct] = useState({name:"", color:"", description:"", minimun:"", numberRef:"", provider:"", quantity:"", size:"", stock:store.stock });
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [findProduct, setFindProduct] = useState("");

    useEffect(()=>{
        const promisse = getProducts(store.stock);
        promisse.then(
          (res)=> {
            setProduct(res.data);
            console.log(res.data);
            setModalOpened(false);
          }
        ).catch((error)=>{
          console.log(error.message);
        });
    },[]);

    function submitSearch(e){
      e.preventDefault();
    }

    async function findProductBy(){
      try{
        const productt = await getProductBy(store.stock,findProduct);
        console.log(productt.data)
        setProduct(productt.data);
      }catch(error){
        alert("Produto não encontrado");
      }
    }

    function submitInsert(e){
      e.preventDefault();
    }

    function desableSuc(){
      setSuccess(false);
    }

    async function createProductt(){
      setDisableForm(true);
      setIsLoading(true);
      try{  
        await createProduct(store.stock, insertProduct);
        setSuccess(true);
        setTimeout(desableSuc,"5000");
        setDisableForm(false);
        setIsLoading(false);
        setInsertProduct({ name:"", color:"", description:"", minimun:"", numberRef:"", provider:"", quantity:"", size:"", stock:store.stock })
      }catch(error){
        console.log(error.message);
        setDisableForm(false);
        setIsLoading(false);
        setInsertProduct({ name:"", color:"", description:"", minimun:"", numberRef:"", provider:"", quantity:"", size:"", stock:store.stock })
        alert("Não foi possível inserir esta entrada, verifique as informações");
      }
    }

    return(
        <>  
        {
          modalOpened === true ? 
          <>
          <Top/>
          <Container2>
            <Content>
              <DivProvider>
              <Provider3> Produtos </Provider3>
              </DivProvider>
              <Menu3>
              <CreateForm onSubmit={submitInsert}>
              <Provider2>Adicionar um produto</Provider2>
                <>
                {success === true ?
                <>
                <Success> Entrada inserida com sucesso </Success>
                <Input type="text" placeholder="Nome do produto" value={insertProduct.name} onChange={event => setInsertProduct({...insertProduct, name: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Número de referência" value={insertProduct.numberRef} onChange={event => setInsertProduct({...insertProduct, numberRef: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="CNPJ do fornecedor" value={insertProduct.provider} onChange={event => setInsertProduct({...insertProduct, provider: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Quantidade mínima no estoque" value={insertProduct.minimun} onChange={event => setInsertProduct({...insertProduct, minimun: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Tamanho" value={insertProduct.size} onChange={event => setInsertProduct({...insertProduct, size: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Cor do produto" value={insertProduct.color} onChange={event => setInsertProduct({...insertProduct, color: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Descrição do Produto" value={insertProduct.description} onChange={event => setInsertProduct({...insertProduct, description: event.target.value})} disable={disableForm} required/>
                </>
                :
                <>
                <Input type="text" placeholder="Nome do produto" value={insertProduct.name} onChange={event => setInsertProduct({...insertProduct, name: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Número de referência" value={insertProduct.numberRef} onChange={event => setInsertProduct({...insertProduct, numberRef: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="CNPJ do fornecedor" value={insertProduct.provider} onChange={event => setInsertProduct({...insertProduct, provider: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Quantidade mínima no estoque" value={insertProduct.minimun} onChange={event => setInsertProduct({...insertProduct, minimun: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Tamanho" value={insertProduct.size} onChange={event => setInsertProduct({...insertProduct, size: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Cor do produto" value={insertProduct.color} onChange={event => setInsertProduct({...insertProduct, color: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Descrição do Produto" value={insertProduct.description} onChange={event => setInsertProduct({...insertProduct, description: event.target.value})} disable={disableForm} required/>
                </>}
                </>
                {isLoading ===  true ? 
                <>
                <Icon>
                <RotatingLines
                strokeColor="#122E40"
                strokeWidth="5"
                animationDuration="0.75"
                width="60"
                visible={true}
              />
              </Icon>
                </>
                  :
                  <>
                <DivBut>
                <Save type="submit" disable={disableForm} onClick={createProductt}><p>Salvar</p></Save>
                <Cancel type="submit" disable={disableForm} onClick={()=>setModalOpened(false)}><p>Cancelar</p></Cancel>
                </DivBut>
                  </>
                }
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
            <Provider> Produtos </Provider>
            <Search onSubmit={submitSearch}>
              <Find  type="text" placeholder='Número do produto' onChange={event => setFindProduct(event.target.value)}  required/>
              <ImSearch onClick={findProductBy}/>
            </Search>
          </SubContent>
          <Menu2>
          <TopMenu>
          <OpenModal>
            <BsFillPlusCircleFill onClick={()=> setModalOpened(true)}/>
            </OpenModal>
            <Topname><p>Name</p></Topname>
            <TopNumberRef><p>N° Ref</p></TopNumberRef>
            <TopSize><p>Tamanho</p></TopSize>
            <TopProvider><p>Provider</p></TopProvider>
            <TopColor><p>Cor</p></TopColor>
            <TopQuantity><p>Quantidade</p></TopQuantity>
          </TopMenu>
          <MenuInfo>
            {product.lenth === 0 ? 
            <></>
            :
            (product.map((info)=>(
                <ProductsInfo 
                id={info.id}
                name={info.name}
                numberRef={info.numberRef}
                size={info.size.name}
                provider={info.provider.name}
                color={info.color}
                quantity={info.quantity}
                />
            )))}
            </MenuInfo>
          </Menu2>
         </Content>
        </Container2>
          </>
        }    
          </>       
    );
}

const MenuInfo = styled.div`
overflow-y:scroll;
width:160%;
`

const Content = styled.div`
margin-top:20px;
width: 80%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`;

const SubContent = styled.div`
display:flex;
margin-top:15px;
height:70px;
margin-bottom:15px;
overflow:hidden;
`;

const Provider = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
height:60px;
width:150px;
display:flex;
flex-direction:flex-start;
`;

const Search = styled.form`
margin-left:630px;
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
`;

const Find = styled.input`
border:none;
height:50px;
font-size: 20px;
width:210px;
padding:15px;
`;

const Menu2 = styled.div`
background-color: #FFFFFE;
max-width: 95%;
height: 100%;
display:flex;
flex-direction:column;
align-items:flex-start;
border-radius: 10px 10px 10px 10px;
overflow-x:scroll;
`
const TopMenu = styled.div`
width:160%;
height:105px;
background-color: #E7EFF3;
border-radius: 10px 10px 0px 0px;
display:flex;
align-items:center;
position:relative;
`
const OpenModal = styled.div`
margin-left:40px;
 font-size:40px;
  color: #495D69;
  &:hover{
  cursor: pointer;
  }
`
const Topname= styled.div`
 width:250px;
 margin-left:60px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const TopNumberRef= styled.div`
 width:250px;
 margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const TopSize= styled.div`
 width:250px;
margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const TopProvider= styled.div`
width:250px;
margin-left:20px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const TopColor= styled.div`
width:250px;
margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const TopQuantity= styled.div`
width:250px;
margin-left:20px;
p{  
    margin-right:15px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`
const Menu3 = styled.div`
min-width: 1200px;
min-height: 600px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px 10px 0px 0px;
`;

const Provider2 = styled.p`
font-weight: 700;
font-size: 25px;
line-height: 38px;
color: #122E40;
margin-bottom:10px;
text-align:center;
`;

const Success = styled.p`
font-size:20px;
color:#32CD32;
margin-bottom:10px;
`;
const Input = styled.input`
width:320px;
height:40px;
margin-bottom:15px;
border-radius: 5px 5px 5px 5px;
padding:10px;
font-size:20px;
`;
const Icon = styled.div`
margin-top:80px;
`;
const DivBut = styled.div`
height:100px;
margin-top:5px;
display:flex;
flex-direction:column;
`;

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
const CreateForm = styled.form`
width:400px;
height:100%;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px 10px 10px 10px;
background-color:#FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
margin-top:10px;
p{
  margin-top:10px;
}
`;

const DivProvider = styled.div`
width:100%;
`

const Provider3 = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
height:60px;
width:150px;
`;