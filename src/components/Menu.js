import styled from "styled-components";

export default function Menu(props){
    return(
        <>
        <MenuPage>
          {props.children}
        </MenuPage>
        </>
    )
}

const MenuPage = styled.div`
background-color: #FFFFFE;
width: 1200px;
min-height: 600px;
display:flex;
align-items: center;
justify-content:space-around;
`