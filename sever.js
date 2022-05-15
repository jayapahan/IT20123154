const express = require('express');
const mongoose = require("mongoose");
const bodyparser= require("body-parser")
const cors = require("cors");

const app = express();
//import routes
const ReserRoutes =require('./routes/Reservation')

//middlleware
app.use(bodyparser.json());
app.use(cors());

app.use(ReserRoutes);

const PORT = 8000;
const DB_url='mongodb+srv://Library:Li123@cluster0.bwya9.mongodb.net/libraryadd?retryWrites=true&w=majority';
mongoose.connect(DB_url,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB connection success');
})
.catch((err =>
    console.log('DB connection error',err)
));
app.listen(PORT,() =>{
    console.log('app is run ${PORT}');
});
