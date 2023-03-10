import styled from "styled-components";
import { ImHome, ImBook, ImBarcode, ImUsers, ImTruck, ImCoinDollar } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export default function SideBar(){
    const navigate = useNavigate();
    return (
        <>
        <BarSide>
        <Button onClick={()=>navigate("/main")}> <ImHome/> <p>Início</p> </Button>
        <Button onClick={()=>navigate("/storage")}> <ImBook/> <p>Estoque</p> </Button>
        <Button onClick={()=>navigate("/products")}> <ImBarcode/> <p>Produtos</p> </Button>
        <Button onClick={()=>navigate("/providers")}> <ImUsers/> <p>Fornecedores</p> </Button>
        <Button onClick={()=>navigate("/receipts")}> <ImTruck/> <p>Recebimentos</p> </Button>
        <Button onClick={()=>navigate("/sell")}> <ImCoinDollar/> <p>Vendas</p> </Button>
        </BarSide>
        </>
    );
}

const BarSide = styled.div`
height:135vh;
width:200px;
background-color:#fafafa;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
margin-right:50px;
overflow-y:hidden;
display:flex;
flex-direction:column;
justify-content:space-evenly;
margin-top:-40px;
`
const Button = styled.button`
width:100%;
height:70px;
background-color:#fafafa;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
border-style:none;
&:hover{
    background-color: #4796BD;
    color:white;
    cursor: pointer;
}
p{
    margin-left:10px;
}
`
