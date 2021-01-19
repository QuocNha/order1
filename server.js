const  express = require('express');
//  const connectDB = require('./config/db');
const app =express();
const mongoose =require('mongoose');
const config= require('config');
const db = config.get('mongoURI');
const product = require ('./backEnd/api/use');
const bodyParser = require('body-parser');
const  connectDB =  async()=>{
    try{
      console.log("Vao roi")
        await mongoose.connect(db,{useUnifiedTopology: true});
      console.log("MongoDb connect");
    }catch(error){
        console.error(error.message);
        // exit connect when error
        process.exit(1);
    }
}
connectDB();
app.use(bodyParser.urlencoded({extended :false}));
app.use(bodyParser.json());

app.get('/',(rep,res)=>res.send('API Running'));
app.use('/api/users',require('./backEnd/api/use'))
app.use('/product',product)
const  PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log('Server PORT '+ PORT));