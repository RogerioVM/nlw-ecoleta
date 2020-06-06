const express = require('express');
const server = express()

const db = require('./database/db');

// configurar pasta publica

server.use(express.static('public'));

// utilizando template engine

server.use(express.urlencoded({extended: true }));

const nunjuks = require('nunjucks');
nunjuks.configure('src/views',{
    express: server,
    noCache: true
})




// Configurar caminhos na aplicação

server.get('/',(req,res) => {
    return  res.render('index.html',{ title: ''})
});


server.get('/create-point',(req,res) => {
    
    

    return  res.render('create-point.html')
});

server.post('/savepoint',(req,res) => {

    // console.log(req.body);
    // inserir dados no db
    const query = `
     INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items
     ) VALUES (?,?,?,?,?,?,?);`

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]
    function afterInsertData(err) {
        if(err) {
           return console.log(err);
        }

        console.log('Cadastro com sucesso');
        console.log(this);

        return res.render('create-point.html',{saved:true})

    }

    db.run(query, values, afterInsertData)


    

})



server.get('/search',(req,res) => {

    const search = req.query.search
    // pegar os dados no db
    if(search == '') {

        return  res.render('search-results.html', { total: 0})
    }

    db.all(`SELECT * FROM places WHERE city Like '%${search}%'`,  function (err, rows) {
        if(err) {
        return console.log(err);
        }
        console.log('Aqui estão seus registros');

        const total = rows.length
        // mostrar a página html com os dados do banco de dados 
        return  res.render('search-results.html', {places: rows, total: total})
    })


    
});





server.listen(3336, (req, res) => {
    console.log('Servidor da nwl');
});