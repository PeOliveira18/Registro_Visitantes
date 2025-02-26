import Axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function CardInformacoes() {
    
    const [listInfo, setListInfo] = useState({})
    console.log(listInfo);
    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            console.log(response);
            
            setListInfo(response.data)
        })
    }, [])

    return (  
        <div>
            {/* {typeof listInfo != undefined &&
                listInfo.map((detalhes) => (
                <CardInformacoes/>
            ))} */}
        </div>
    );
}

export default CardInformacoes;