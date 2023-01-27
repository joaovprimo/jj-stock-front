import styled from 'styled-components';

export default function Top(){
    return (
        <>
        <TopPage>
        <LogoInfo>
        <p>Logo</p>
        </LogoInfo>
        </TopPage>
        </>
    );
}

const TopPage = styled.div`
width:100vw;
height:100px;
background-color: #4796BD;
display:flex;
align-items:center;
justify-content:flex-start;
`

const LogoInfo = styled.div`
margin-left:100px;
p{
    font-size:25px;
}
`