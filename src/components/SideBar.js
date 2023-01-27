import styled from "styled-components";
import { ImHome, ImBook, ImBarcode, ImUsers, ImTruck, ImCoinDollar } from "react-icons/im";

export default function SideBar(){
    return (
        <>
        <BarSide>
        <Button> <ImHome/> <p>Início</p> </Button>
        <Button> <ImBook/> <p>Estoque</p> </Button>
        <Button> <ImBarcode/> <p>Produtos</p> </Button>
        <Button> <ImUsers/> <p>Fornecedores</p> </Button>
        <Button> <ImTruck/> <p>Recebimentos</p> </Button>
        <Button> <ImCoinDollar/> <p>Vendas</p> </Button>
        </BarSide>
        </>
    );
}

const BarSide = styled.div`
height:100vh;
width:250px;
background-color:#fafafa;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`
const Button = styled.div`
width:100%;
height:100px;
background-color:#fafafa;
margin-top:40px;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
&:hover{
    background-color: #4796BD;
    color:white;
}
p{
    margin-left:10px;
}
`
