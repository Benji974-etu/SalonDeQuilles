const sqlite3 = require('sqlite3').verbose();


// Connect to the database
let db = new sqlite3.Database('./personne.db', (err) =>{
    if (err){
        console.log(err);
    }
    console.log('Connected to database');
});


// Create a table named personnes
// sql = `CREATE TABLE personnes (id INTEGER PRIMARY KEY, nom, prenom, telephone)`;
// db.run(sql);

// Insert data to the table
// db.run(`INSERT INTO personnes (nom, prenom, telephone) VALUES (?,?,?)`, ['Rivera', 'Maria', '505'], (err) =>{
//     if (err){
//         return console.log(err.message);
//     }
//     console.log('Data inserted to table');
// });

// Fetch data from the table
// let sql = `SELECT * FROM personnes`;
// db.each(sql, (err, data) =>{
//     if(err){
//         throw err;
//     }
//     console.log(`${data.nom} ${data.prenom} - ${data.telephone}`);
// });


// Close the connection to the database
db.close((err) =>{
    if (err){
        return console.error(err.message);
    }
    console.log('Closed connection to database');
});