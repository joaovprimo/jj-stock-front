import { useNavigate } from 'react-router-dom';

export default function PrivatePage ({children}){
    const navigate = useNavigate();
    const auth = localStorage.getItem('token');

    if(auth){
        return(
            <>
            {children}
            </>
        )
    }else{
        alert("Você não possui acesso a esta página");
        navigate("/");
    }
}