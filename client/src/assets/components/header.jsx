import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (  
        <div className="bg-blue-500 h-24 flex sm:flex-row flex-col justify-center items-center text-4xl text-white">
            <h1>Formulario de visitantes</h1>
            <div className="md:absolute relative md:right-8 right-0 ">
                <Link to='/lista-visitantes' className="text-xl hover:underline">Consultar registros</Link>
            </div>
        </div>
    );
}

export default Header;