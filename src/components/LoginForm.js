import styled from 'styled-components';
import { useState, useContext } from 'react';
import { postLogin } from '../axios/axios.js';
import UserContext from '../context/context.js';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

export default function LoginForm(){
    const [login, setLogin] = useState({ cnpj:"", password:""});
    const [disableForm, setDisableForm] = useState(false);
    const [ failed, setFailed ] = useState(false);
    const { setStore } = useContext(UserContext);
    const navigate = useNavigate();

    function submitLogin(e){
        e.preventDefault();
    }

   async function loginStore(){
        setDisableForm(true);
        try{
          const log = await postLogin(login);
          console.log(log.data);
          localStorage.setItem("token", log.data.token);
          setStore(log.data.store);
          setDisableForm(false);
          navigate("/main");
        }catch(error){
          setDisableForm(false);
          setFailed(true);
        }
    }

    return(
        <>
        <SpaceLogin>
        <Login>
          <p>Login</p>
        </Login>
          <Form onSubmit={submitLogin}>
          <FormLogin>
            {
            failed ? 
            <><p> CNPJ ou SENHA incorretos! </p></> 
            :
            <></>
            }
            <Input type="text" placeholder='cpnj' onChange={event => setLogin({...login, cnpj: event.target.value})} disabled={disableForm} required />
            <Input type="text" placeholder='senha' onChange={event => setLogin({...login, password: event.target.value})} disabled={disableForm} required />
            </FormLogin>
            <Submit type="submit" disabled={disableForm} onClick={loginStore}>
              {
              disableForm == false ? <p>Login</p> :
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
              }
            </Submit>
          </Form>
        </SpaceLogin>
        </>
    );
}

const SpaceLogin = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:495px;
height:380px;
background-color:#F5F5F5;
`
const Form = styled.form`
`

const Input = styled.input`
width: 367px;
height: 50px;
background-color: #E0E0E0;
border-radius: 10px;
margin-bottom:20px;
padding:15px;
font-size: 20px;
font-weight: 700;
`

const Login = styled.h1`
font-size:50px;
font-weight:700px;
line-height:57.6px;
text-align:center;
margin-bottom:55px;
`;

const FormLogin = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
p{
  color:red;
  font-size:25px;
  text-align:center;
}
`

const Submit = styled.div`
width: 342px;
height: 50px;
background-color: #4796BD;
box-shadow: 0px 5px 65px rgba(0, 0, 0, 0.1);
border-radius: 25px;
margin-top:35px;
margin-left:15px;
display:flex;
align-items:center;
justify-content:center;
p{
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 38px;
display: flex;
align-items: flex-end;
text-align: center;
color: #F4F9FA;
}
`
