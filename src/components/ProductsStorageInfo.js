import styled from "styled-components";

export default function ProductsStorageInfo({id, name, numberRef, size, provider, color, quantity, minimun}){
    return (
        <>
    <ProductsInfoss>
       <p>{name}</p>
       <p>{numberRef}</p>
       <p>{size}</p>
       <p>{provider}</p>
       <p>{color}</p>
       <p>{quantity}</p>
      <p>{minimun}</p>
    </ProductsInfoss>
        </>
    )
}

const ProductsInfoss = styled.div`
width:100%;
height:70px;
border-bottom:solid transparent;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
display:flex;
align-items:center;
box-sizing:border-box;
justify-content: space-between;
font-size:20px;
`