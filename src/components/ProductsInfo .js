import styled from "styled-components";
import { ImBin } from "react-icons/im";
import { deleteProduct } from "../axios/axios.js";
import { useContext } from "react";
import UserContext from "../context/context.js";

export default function ProductsInfo({id, name, numberRef, size, provider,  color, quantity}){
  
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
       <P6><p>{color}</p></P6>
       <P7><p>{quantity}</p></P7>
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
font-size:20px;
`
const Icons = styled.div`
width:5%;
margin-left:50px;
`
const P1 = styled.div`
 width:250px;
p{  
    width:80%;
    margin-left:8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P2 = styled.div`
 width:250px;
p{  
    width:80%;
    margin-left:15px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P3 = styled.div`
width:250px;
p{  
    width:80%;
    margin-left:40px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P4 = styled.div`
width:250px;
p{  
    width:80%;
    margin-left:33px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P5 = styled.div`
font-size:20px;
&:hover{
    cursor: pointer;
}
`
const P6 = styled.div`
width:250px;
p{  
    width:80%;
    margin-left:45px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P7 = styled.div`
width:250px;
display:flex;
justify-content:center;
p{  
    margin-right:50px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`