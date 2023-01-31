import styled from "styled-components";
import { ImBin } from "react-icons/im";
import { deleteProduct } from "../axios/axios.js";
import { useContext } from "react";
import UserContext from "../context/context.js";

export default function ProductsInfo({id, name, numberRef, size, provider, fiscalNote, color, quantity}){
  
  const { setProduct } = useContext(UserContext);
  async function deleteProd(){
        try{
            const prov = await deleteProduct(id);
            setProduct(prov.data);
        }catch(error){
            alert("Não Foi possivel deletar este fornecedor!")
        }
    }
  return(
    <>
    <ProductsInfoss>
        <Icons>
       <P5><ImBin onClick={deleteProd}/></P5>
       </Icons>
       <P1><p>{name}</p></P1>
       <P2><p>{numberRef}</p></P2>
       <P3><p>{size}</p></P3>
       <P4><p>{provider}</p></P4>
       <P6><p>{fiscalNote}</p></P6>
       <P7><p>{color}</p></P7>
       <P8><p>{quantity}</p></P8>
    </ProductsInfoss>
    </>
)
}

const ProductsInfoss = styled.div`
width:100%;
height:70px;
border-bottom:solid transparent;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
display:flex;
align-items:center;

box-sizing:border-box;
`
const Icons = styled.div`
width:5%;
margin-left:50px;
`
const P1 = styled.div`
font-size:20px;
width:10%;
p{
    margin-left:0px;
}
`
const P2 = styled.div`
font-size:20px;
width:10%;
p{
    margin-left:50px;
}
`
const P3 = styled.div`
font-size:20px;
width:3%;
p{
    margin-left:130px;
}
`
const P4 = styled.div`
font-size:20px;
width:10%;
p{
    margin-left:270px;
}
`
const P5 = styled.div`
font-size:20px;
&:hover{
    cursor: pointer;
}
`
const P6 = styled.div`
font-size:20px;
width:10%;
p{
    margin-left:360px;
}
`
const P7 = styled.div`
font-size:20px;
width:10%;
p{
    margin-left:440px;
}
`
const P8 = styled.div`
font-size:20px;
width:10%;
p{
    margin-left:530px;
}
`