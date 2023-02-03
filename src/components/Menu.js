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
min-width: 90%;
min-height: 80%;
display:flex;
align-items: center;
justify-content:space-around;
`