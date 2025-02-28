import Axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function CardInformacoes() {
    
    const [listInfo, setListInfo] = useState()
    
    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {        
            setListInfo(response.data)
        })
    }, [])

    return (  
        <div>
        <div className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-x-24 gap-y-10 m-auto p-10 ">
            { typeof listInfo !== "undefined"&&
                listInfo.map((value) => {
                    return (
                    <div key={value.idvisitantes} className="">
                        <div className="espaco-info">
                            <h1>Nome: {value.NOME}</h1>
                        </div>
                        <div className="espaco-info">
                            <h1>CPF: {value.CPF}</h1>
                        </div>
                        <div className="espaco-info">
                            <h1>Endereco: {value.ENDERECO}</h1>
                        </div>
                        <div className="espaco-info">
                            <h1>Numero: {value.TELEFONE}</h1>
                        </div>
                        <div className="espaco-info">
                            <h1>Idade: {value.IDADE}</h1>
                        </div>
                        <div className="espaco-info">
                            <h1>Registrado em: {new Date(value.created_at).toLocaleDateString("pt-BR")}</h1>
                        </div>
                    </div>
                    )
                })}
            
        </div>
        <div className="flex justify-center pb-5">
            <Link to='/'><button className="p-3 rounded-xl border cursor-pointer hover:bg-gray-300  active:opacity-30">Voltar</button></Link>
        </div>
        </div>
    );
}

export default CardInformacoes;