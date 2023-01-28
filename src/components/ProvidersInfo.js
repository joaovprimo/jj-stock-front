import styled from "styled-components";
import { ImBin, ImPencil } from "react-icons/im";

export default function ProvidersInfos({name, email, cnpj}){
    console.log(name, email, cnpj)
    return(
        <>
        <ProvidersInfoss>
            <Icons>
           <P4><ImPencil/></P4>
           <P5><ImBin/></P5>
           </Icons>
           <P1><p>{name}</p></P1>
           <P2><p>{email}</p></P2>
           <P3><p>{cnpj}</p></P3>
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
font-size:20px;
width:30%;
p{
    margin-left:80px;
}
`
const P2 = styled.div`
font-size:20px;
width:30%;
display:flex;
p{
    margin-left:130px;
}

`
const P3 = styled.div`
font-size:20px;
width:30%;
display:flex;
p{
  margin-left:180px;
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