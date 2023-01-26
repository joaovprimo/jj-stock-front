import styled from 'styled-components';
import { useState, useContext } from 'react';
import { postLogin } from '../axios/axios.js';
import UserContext from '../context/context.js';

export default function LoginForm(){
    const [login, setLogin] = useState({ cnpj:"", password:""});
    const [disableForm, setDisableForm] = useState(false);

    const { store, setStore } = useContext(UserContext);

    function submitLogin(e){
        e.preventDefault();
    }

   async function loginStore(){
        setDisableForm(!disableForm);
        try{
           const log = await postLogin(login);
           console.log(log);
            //localStorage.setItem('token', log.token);
            //setStore(log.token)
        }catch(error){
        alert(error.response.data)
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
            <Input type="text" placeholder='cpnj' onChange={event => setLogin({...login, cnpj: event.target.value})} disabled={disableForm} required />
            <Input type="text" placeholder='password' onChange={event => setLogin({...login, password: event.target.value})} disabled={disableForm} required />
            </FormLogin>
            <Submit type="submit" disabled={disableForm} onClick={loginStore}>
              <p>Login</p>
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
