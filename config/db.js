require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
    //database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;

    try {
        connection.once('open', ()=>{
        console.log('Database connected.');
        }) 
    } catch (error) {
        console.log('Connection failed.');
    }
}

module.exports = connectDB;