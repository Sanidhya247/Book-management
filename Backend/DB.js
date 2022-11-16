const mongoose  = require('mongoose');

const connnectToDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/books',()=>{
        console.log('connected to database')
    });
}


module.exports = connnectToDb;