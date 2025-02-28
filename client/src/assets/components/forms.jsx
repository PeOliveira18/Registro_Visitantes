import React, { useState } from "react";
import Axios from "axios";

function Forms() {
    const [values, setValues] = useState({});

    const handleChanges = (value) => {
        setValues((prev) => ({
            ...prev,
            [value.target.name]: value.target.value,
        }));
    };

    const validateForm = () => {
        if (isNaN(values.idade)) {
            alert("Idade deve ser um número!");
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            Axios.post("http://localhost:3001/register", {
                nome: values.nome,
                cpf: values.cpf,
                endereco: values.endereco,
                telefone: values.telefone,
                idade: values.idade,
            }).then((response) => {
                console.log(response);
            });
        }
        setValues({});
    };

    return (
        <div className="flex justify-center p-5">
            <div className="w-full max-w-md bg-gray-100 rounded-xl border px-5 py-6">
                <form action="">
                    <div className="div-forms mb-4">
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            className="input-forms w-full p-3 border border-gray-300 rounded-md"
                            name="nome"
                            placeholder="Nome"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="div-forms mb-4">
                        <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-gray-700">
                            CPF *APENAS NÚMEROS*
                        </label>
                        <input
                            type="text"
                            className="input-forms w-full p-3 border border-gray-300 rounded-md"
                            name="cpf"
                            placeholder="CPF"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="div-forms mb-4">
                        <label htmlFor="endereco" className="block mb-2 text-sm font-medium text-gray-700">
                            Endereço
                        </label>
                        <input
                            type="text"
                            className="input-forms w-full p-3 border border-gray-300 rounded-md"
                            name="endereco"
                            placeholder="Rua, Número, Cidade, Estado"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="div-forms mb-4">
                        <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-gray-700">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            className="input-forms w-full p-3 border border-gray-300 rounded-md"
                            name="telefone"
                            placeholder="+55 (DDD) XXXXX-XXXX"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="div-forms mb-6">
                        <label htmlFor="idade" className="block mb-2 text-sm font-medium text-gray-700">
                            Idade
                        </label>
                        <input
                            type="text"
                            className="input-forms w-full p-3 border border-gray-300 rounded-md"
                            name="idade"
                            placeholder="Idade"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 w-full rounded-md px-3 py-4 text-white font-bold hover:bg-blue-700 active:opacity-50"
                        onClick={handleSubmit}
                    >
                        CADASTRAR
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Forms;
