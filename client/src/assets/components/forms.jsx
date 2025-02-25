import React, { useState } from "react";
import Axios from "axios"



function Forms() {
    const [values, setValues] = useState({})
    
    const handleChanges = (value) => {
        setValues((prev) =>({
            ...prev,
            [value.target.name]: value.target.value,
        }))
    }

    const handleSubmit = () => {
        Axios.post("http://localhost:3001/register", {
            nome: values.nome,
            cpf: values.cpf,
            endereco: values.endereco,
            telefone: values.telefone,
            idade: values.idade,
        }).then((response) => {console.log(response);
        })
        setValues({})
    }

    return (  
        <div className="w-1/4 bg-gray-100 m-auto p-10 -my-5 flex">
                <div className="w-full flex flex-col gap-y-3 m-auto justify-center items-center">
                    <form action="">
                    <div className="div-forms">
                            <label htmlFor="">Nome</label>
                            <input type="text" className="input-forms" name="nome" placeholder="Nome" onChange={handleChanges}/>
                        </div>
                        <div className="div-forms">
                            <label htmlFor="">CPF *APENAS NUMEROS*</label>
                            <input type="number" className="input-forms" name="cpf" placeholder="CPF" onChange={handleChanges}/>
                        </div>
                        <div className="div-forms">
                            <label htmlFor="">Endereco</label>
                            <input type="text" className="input-forms" name="endereco" placeholder="Rua, Numero, Cidade, Estado" onChange={handleChanges}/>
                        </div>
                        <div className="div-forms">
                            <label htmlFor="">Telefone</label>
                            <input type="number" className="input-forms" name="telefone" placeholder="+(DDD)96191-2468" onChange={handleChanges}/>
                        </div>
                        <div className="div-forms">
                            <label htmlFor="">Idade</label>
                            <input type="text" className="input-forms" name="idade" placeholder="Idade" onChange={handleChanges}/>
                        </div>
                        <button type="submit" className="bg-blue-500 rounded-[4px] px-3 py-4 text-white font-bold my-4 hover:bg-blue-700" onClick={() => handleSubmit()}>CADASTRAR</button>
                        
                    </form>
                        
                    </div>
                
        </div>
    );
}

export default Forms;