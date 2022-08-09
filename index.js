const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db', //nome do servico
    user: 'root',
    password: 'root',
    database: 'mydb'
});

connection.connect();

app.get('/', (req, res) => {
    res.send('Hello World com Node.jsaaaaa!');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// Nginx - proxy reverso

//nginx.conf - 

//Integracao Continua - git push origin main -> github action

// roda testes automatizados
// roda outras coisas
// conect no cloud run - deploy