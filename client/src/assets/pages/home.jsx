import CardInformacoes from "../components/cardInformacoes";
import Forms from "../components/forms";
import Header from "../components/header";
import React from "react";

function Home() {
    return (  
        <div>
            <Header/>
            <Forms/>
            <CardInformacoes/>
        </div>
    );
}

export default Home;