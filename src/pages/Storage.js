import styled from "styled-components";
import Top from "../components/Top.js";
import Container2 from "../components/Container2.js";
import { useEffect, useContext, useState } from "react";
import UserContext from "../context/context.js";
import { getStorage, getProductBy } from "../axios/axios.js";
import { ImSearch } from "react-icons/im";
import ProductsStorageInfo  from "../components/ProductsStorageInfo.js";

export default function Storage () {
    const { productsStore, setProductsStore, store } = useContext(UserContext);
    const [findProduct, setFindProduct] = useState("");
    
    useEffect(()=>{
        const promisse = getStorage(store.stock);
        promisse.then(
          (res)=> {
            setProductsStore(res.data);
            console.log(res.data);
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
        setProductsStore(productt.data);
      }catch(error){
        alert("Produto não encontrado");
      }
    }

return(
    <>
    <Top/>
        <Container2>
         <Content>
          <SubContent>
            <Provider> Estoque </Provider>
            <Search onSubmit={submitSearch}>
              <Find type="text" placeholder='Número do produto' onChange={event => setFindProduct(event.target.value)} required/>
              <ImSearch onClick={findProductBy}/>
            </Search>
          </SubContent>
          <Menu2>
          <TopMenu>
            <Topname><p>Name</p></Topname>
            <TopNumberRef><p>N° Ref</p></TopNumberRef>
            <TopSize><p>Tamanho</p></TopSize>
            <TopProvider><p>Provider</p></TopProvider>
            <TopColor><p>Cor</p></TopColor>
            <TopQuantity><p>Quantidade</p></TopQuantity>
            <TopMinimun><p>Mínimo</p></TopMinimun>
          </TopMenu>
          <MenuInfo>
            {productsStore.lenth === 0 ? 
            <></>
            :
            (productsStore.map((info)=>(
                <ProductsStorageInfo 
                id={info.id}
                name={info.name}
                numberRef={info.numberRef}
                size={info.size.name}
                provider={info.provider.name}
                color={info.color}
                quantity={info.quantity}
                minimun={info.minimun}
                />
            )))}
            </MenuInfo>
          </Menu2>
         </Content>
        </Container2>
    </>
)
}

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
const TopMinimun= styled.div`
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
const MenuInfo = styled.div`
overflow-y:scroll;
width:100%;
`