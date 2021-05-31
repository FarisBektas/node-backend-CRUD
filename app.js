const express = require('express')
const mongoose = require('mongoose');
const app = express();
const databaseString = process.env.DB_CONNECTION_STRING || "mongodb+srv://asdf2363:risfakralj1@cluster0.iaekf.mongodb.net/SE-project?retryWrites=true&w=majority";
const cors = require('cors'); 
app.use(cors());

mongoose.connect(databaseString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open',()=>{
    console.log("Successful")
});

mongoose.connection.on('error',error =>{
    console.log('Error: ',error)
});


//Routes
const userRoutes = require('./routes/api/users');
const arrivalsRoutes = require('./routes/api/arrivals');

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/api/users',userRoutes)
app.use('/api/arrivals',arrivalsRoutes)

app.use((req,res,next)=>{
    const error = new Error('Wrong request');
    error.status=405;
    next(error);
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
        error : {
        message: error.message,
        status: statusCode,
        stack: error.stack,
        },
    })
});


module.exports=app;
