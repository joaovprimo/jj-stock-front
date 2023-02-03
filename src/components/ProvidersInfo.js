import styled from "styled-components";
import { ImBin, ImPencil } from "react-icons/im";
import {deleteProvider} from "../axios/axios.js";
import { useContext } from "react";
import UserContext from "../context/context.js";

export default function ProvidersInfos({id, name, email, cnpj}){
    const { provider, setProvider } = useContext(UserContext);
    async function deleteProv(id){
        try{
            const prov = await deleteProvider(id);
            setProvider(prov.data);
        }catch(error){
            alert("Não Foi possivel deletar este fornecedor!")
        }
    }
    return(
        <>
        <ProvidersInfoss>
            <Icons>
           <P4><ImPencil/></P4>
           <P5 onClick={()=>deleteProv(id)}><ImBin/></P5>
           </Icons>
           <P1><p>{name}</p></P1>
           <P2><p>{cnpj}</p></P2>
           <P3><p>{email}</p></P3>
        </ProvidersInfoss>
        </>
    )
}

const ProvidersInfoss = styled.div`
width:100%;
height:70px;
border-bottom:solid transparent;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
display:flex;
align-items:center;
justify-content:space-around;
box-sizing:border-box;
`
const Icons = styled.div`
display:flex;
width:10%;
justify-content:space-evenly;
`
const P1 = styled.div`
 width:250px;
p{  
    margin-left:25px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P2 = styled.div`
 width:250px;
p{  
    margin-left:10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P3 = styled.div`
 width:250px;
p{  
    margin-left:10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const P4 = styled.div`
font-size:20px;
&:hover{
    cursor: pointer;
}
`
const P5 = styled.div`
font-size:20px;
&:hover{
    cursor: pointer;
}
`