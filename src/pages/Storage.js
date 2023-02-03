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
              <p><ImSearch onClick={findProductBy}/></p>
            </Search>
          </SubContent>
          <Menu2>
          <TopMenu>
            <Topname><p>Name</p></Topname>
            <TopNumberRef><p>N° Referencia</p></TopNumberRef>
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
`;
const TopMenu = styled.div`
width:160%;
height:105px;
background-color: #E7EFF3;
border-radius: 10px 10px 0px 0px;
display:flex;
align-items:center;
position:relative;
`;
const Topname= styled.div`
 width:250px;
 margin-left:40px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`;
const TopNumberRef= styled.div`
 width:250px;
 margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`;
const TopSize= styled.div`
 width:250px;
margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`;
const TopProvider= styled.div`
width:250px;
margin-left:20px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`;
const TopMinimun= styled.div`
width:250px;
margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
    
}
`;
const TopColor= styled.div`
width:250px;
margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`;
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
`;
const MenuInfo = styled.div`
overflow-y:scroll;
width:160%;
`;