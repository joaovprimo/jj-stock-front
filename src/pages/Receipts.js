import styled from "styled-components";
import Top from "../components/Top.js";
import Container2 from "../components/Container2.js";
import { useContext, useState } from "react";
import UserContext from "../context/context.js";
import { createEntry } from "../axios/axios.js";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';

export default function Receipts(){
  const { store } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disableForm, setDisableForm] = useState(false);
  const [insertEntry, setInsertEntry] = useState({ name:"", quantity:"", fiscalNote:"", provider:"", receiveDate:"", size:"" });
  const navigate = useNavigate();

  function submitInsert(e){
    e.preventDefault();
  }
 
  function desableSuc(){
    setSuccess(false);
  }

  async function createEntryy(){
    setDisableForm(true);
    setIsLoading(true);
    try{  
      await createEntry(store.stock, insertEntry);
      setSuccess(true);
      setTimeout(desableSuc,"5000");
      setDisableForm(false);
      setIsLoading(false);
      setInsertEntry({ name:"", quantity:"", fiscalNote:"", provider:"", receiveDate:"", size:"" })
    }catch(error){
      console.log(error.message);
      setDisableForm(false);
      setIsLoading(false);
      setInsertEntry({ name:"", quantity:"", fiscalNote:"", provider:"", receiveDate:"", size:"" })
      alert("Não foi possível inserir esta entrada, verifique as informações");
    }
  }
    return(
        <>
        <Top/>
          <Container2>
            <Content>
              <Provider> Recebimentos </Provider>
              <Menu3>
              <CreateForm onSubmit={submitInsert}>
              <Provider2>Adicionar recebimento de um produto</Provider2>
                <>
                {success === true ?
                <>
                <Success> Entrada inserida com sucesso </Success>
                <Input type="text" placeholder="Nome do produto" value={insertEntry.name} onChange={event => setInsertEntry({...insertEntry, name: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Quantidade" value={insertEntry.quantity} onChange={event => setInsertEntry({...insertEntry, quantity: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Nota Fiscal" value={insertEntry.fiscalNote} onChange={event => setInsertEntry({...insertEntry, fiscalNote: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="CNPJ do fornecedor" value={insertEntry.provider} onChange={event => setInsertEntry({...insertEntry, provider: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Data de Recebimento" value={insertEntry.receiveDate} onChange={event => setInsertEntry({...insertEntry, receiveDate: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Size" value={insertEntry.size} onChange={event => setInsertEntry({...insertEntry, size: event.target.value})} disable={disableForm} required/>
                </>
                :
                <>
                <Input type="text" placeholder="Nome do produto" value={insertEntry.name} onChange={event => setInsertEntry({...insertEntry, name: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Quantidade" value={insertEntry.quantity} onChange={event => setInsertEntry({...insertEntry, quantity: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Nota Fiscal" value={insertEntry.fiscalNote} onChange={event => setInsertEntry({...insertEntry, fiscalNote: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="CNPJ do fornecedor" value={insertEntry.provider} onChange={event => setInsertEntry({...insertEntry, provider: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Data de Recebimento" value={insertEntry.receiveDate} onChange={event => setInsertEntry({...insertEntry, receiveDate: event.target.value})} disable={disableForm} required/>
                <Input type="text" placeholder="Size" value={insertEntry.size} onChange={event => setInsertEntry({...insertEntry, size: event.target.value})} disable={disableForm} required/>
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
                <Save type="submit" disable={disableForm} onClick={createEntryy}><p>Salvar</p></Save>
                <Cancel type="submit" disable={disableForm} onClick={()=> navigate('/main')}><p>Cancelar</p></Cancel>
                </DivBut>
                  </>}
                </CreateForm>
              </Menu3>
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
const Provider = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
height:60px;
width:100%;
display:flex;
justify-content:flex-start;
`;
const Provider2 = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #122E40;
margin-bottom:30px;
text-align:center;
`;
const Menu3 = styled.div`
min-width: 1200px;
min-height: 600px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px 10px 0px 0px;
`;
const CreateForm = styled.form`
width:400px;
height:600px;
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
const Input = styled.input`
width:300px;
height:50px;
margin-bottom:15px;
border-radius: 5px 5px 5px 5px;
padding:10px;
font-size:20px;
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
height:50px;
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
height:50px;
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

const Success = styled.p`
font-size:20px;
color:#32CD32;
margin-bottom:10px;
`

const Icon = styled.div`
margin-top:80px;
`