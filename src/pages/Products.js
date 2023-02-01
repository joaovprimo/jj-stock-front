import styled from "styled-components";
import Container2 from "../components/Container2.js";
import { ImSearch } from "react-icons/im";
import Top from "../components/Top.js";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/context.js";
import { getProducts, createProduct } from "../axios/axios.js";
import ProductsInfo from "../components/ProductsInfo .js";
import { RotatingLines } from 'react-loader-spinner';

export default function Products(){
    const { product, setProduct, store } = useContext(UserContext);
    const [modalOpened, setModalOpened] = useState(false);
    const [disableForm, setDisableForm] = useState(false);
    const [insertProduct, setInsertProduct] = useState({name:"", color:"", description:"", minimun:"", numberRef:"", provider:"", quantity:"", size:"", stock:store.stock });
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  console.log(modalOpened)
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
              <Provider> Produtos </Provider>
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
            <Search>
              <Find type="text" placeholder='Nome do produto' required/>
              <ImSearch/>
            </Search>
          </SubContent>
          <Menu2>
          <TopMenu>
          <p><BsFillPlusCircleFill onClick={()=> setModalOpened(true)}/></p>
            <Topname><p>Name</p></Topname>
            <TopNumberRef><p>N° Ref</p></TopNumberRef>
            <TopSize><p>Tamanho</p></TopSize>
            <TopProvider><p>Provider</p></TopProvider>
            <TopFiscal><p>Nota Fiscal</p></TopFiscal>
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
                //fiscalNote={info.fiscalNote.number}
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
width:100%;
`

const Content = styled.div`
margin-top:40px;
width: 80%;
height:100%;
`;

const SubContent = styled.div`
display:flex;
`;

const Provider = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
margin-bottom:50px;
`;

const Search = styled.form`
margin-left:1150px;
font-size: 32px;
width:250px;
height:50px;
background-color:white;
display:flex;
border-radius: 5px 5px 0px 0px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
align-items:center;
&:hover{
    cursor: pointer;
}
`;

const Find = styled.input`
border:none;
height:50px;
font-size: 20px;
width:200px;
padding:15px;
`;

const Menu2 = styled.div`
background-color: #FFFFFE;
min-width: 1200px;
height: 600px;
display:flex;
flex-direction:column;
align-items:space-around;
align-items:flex-start;
border-radius: 10px 10px 0px 0px;
`
const TopMenu = styled.div`
width:100%;
height:105px;
background-color: #E7EFF3;
border-radius: 10px 10px 0px 0px;
display:flex;
align-items:center;
justify-content:space-between;
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
const Topname= styled.div`
display:flex;
justify-content:flex-start;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    
}
`
const TopNumberRef= styled.div`
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    
}
`
const TopSize= styled.div`
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    
}
`

const TopProvider= styled.div`
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    
}
`
const TopFiscal= styled.div`
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    
}
`
const TopColor= styled.div`
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
   
}
`
const TopQuantity= styled.div`
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
font-size: 32px;
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
height:50px;
margin-bottom:15px;
border-radius: 5px 5px 5px 5px;
padding:10px;
font-size:20px;
`;
const Icon = styled.div`
margin-top:80px;
`;
const DivBut = styled.div`
height:200px;
margin-top:5px;
display:flex;
flex-direction:column;
justify-content: space-around;
`;

const Cancel = styled.button`
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
height:700px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px 10px 10px 10px;
background-color:#FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
p{
  margin-top:10px;
}
`;