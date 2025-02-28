const express = require('express')
const app = express()
const mysql = require("mysql")
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "pos54321",
    database: "visitantes",
})

app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    const { nome } = req.body
    const { cpf } = req.body
    const { endereco } = req.body
    const { telefone } = req.body
    const { idade } = req.body
    
    let SQL = "INSERT INTO registo_visitantes ( nome, cpf, endereco, telefone, idade ) VALUES ( ?, ?, ?, ?, ? )"

    db.query(SQL, [nome, cpf, endereco, telefone, idade], (err, result) => {
        console.log(err);
    })
})

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * FROM registo_visitantes";
    db.query(SQL, (error, result) => {
        if(error){
            console.log(error);
        }else{
            res.json(result)
        }
        
    })
})

app.listen(3001, () => {console.log('Rodando servidor');
})



