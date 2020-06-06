// importar a dependência do sqlite3

const sqlite3 = require('sqlite3').verbose()

//iniciar o projeto de banco de dados

const db = new sqlite3.Database('./src/database/database.db')

// // utilizar o objeto de banco de dados, para nossa operações

// db.serialize(() => {
//     // Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)


    // const query = `
    // INSERT INTO places (
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // ) VALUES (?,?,?,?,?,?,?);`

    // const values =  [
    //     'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    //     'Paperside',
    //     'Rogerio Morais, Jardim Angélica',
    //     'Número 20',
    //     'Carapicuíba',
    //     'São Paulo',
    //     'Resídous Eletrônicos, Lâmpadas'
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err);
    //     }

    //     console.log('Cadastro com sucesso');
    //     console.log(this);
    // }

    // db.run(query, values, afterInsertData)

//     Inserir dados na tabela


//     Consultar dados da tabela
//     db.all('SELECT * FROM places',  function (err, rows) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log('Aqui estão seus registros');
//         console.log(rows);

//     })

//     Deletar um dado da tabela

    // db.run('DELETE FROM places WHERE id = ?', [7], function (err) {
    //     if(err) {
    //         return console.log(err);
    //     }

    //     console.log('Registro deletado com sucesso');
        
    // })

// })

module.exports = db;
