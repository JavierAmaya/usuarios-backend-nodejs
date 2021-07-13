var mongoose = require ('mongoose');
//nombre de la base de datos

let bd = 'spotify';
let port = '27017';
let host = 'localhost';

class Database {
    constructor(){
        this.conectar ();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then( result =>{console.log('DB conectada')})
        .catch(error => {console.log(error)})        
    }
}


module.exports = new Database();