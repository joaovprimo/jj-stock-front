import styled from "styled-components";

export default function ProductsStorageInfo({id, name, numberRef, size, provider, color, quantity, minimun}){
    return (
        <>
    <ProductsInfoss>
       <Name><p>{name}</p></Name>
       <NumberRef><p>{numberRef}</p></NumberRef>
       <Size><p>{size}</p></Size>
       <Provider><p>{provider}</p></Provider>
       <Color><p>{color}</p></Color>
       <Quantity><p>{quantity}</p></Quantity>
       <Minimun><p>{minimun}</p></Minimun>
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
font-size:20px;
`
const Name= styled.div`
 width:250px;
 margin-left:40px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const NumberRef= styled.div`
 width:250px;
 margin-left:30px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const Size= styled.div`
 width:250px;
margin-left:65px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const Provider= styled.div`
width:250px;
margin-left:-8px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const Minimun= styled.div`
width:250px;
margin-left:30px;
display:flex;
justify-content:center;
p{  
    margin-right:105px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const Color= styled.div`
width:250px;
margin-left:40px;
p{  
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`
const Quantity= styled.div`
width:250px;
margin-left:20px;
display:flex;
justify-content:center;
p{  
    margin-right:95px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #495D69;
}
`