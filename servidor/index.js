var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

//Obtém o objeto express e salva.
var app = express();
//Registra a biblioteca 'cors' no objeto express.
app.use(cors());

/*Criar o servidor e torna
acessível na porta 3000*/
app.listen(3000, () => {
    console.log('200 OK');
});

//Obter o objeto de conexão a base de dados ifpar.
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Loja',
    port: '3307'
});

con.connect((err) => {
    if (err) {console.log(err)}
});

app.get('/produtos', (req, res) => {
    con.query('SELECT * FROM produtos', (err, result) => {
        if(err) {console.log(err)}
        res.send(result);
    });
});
/*
app.get('/alunos/:mat', (req, res)=> {
    const mat = req.params.mat;
    con.query('SELECT * FROM alunos WHERE matricula = ? ',mat ,(err,result) => {
        if(err) {console.log(err);}
        res.send(result);
    })
});
*/

