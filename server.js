const  express = require('express');
const morgan = require('morgan');
//  const connectDB = require('./config/db');
const app =express();
const mongoose =require('mongoose');
const config= require('config');
const db = config.get('mongoURI');
const product = require ('./backEnd/api/use');
const user = require ('./backEnd/api/resign');
const customer = require('./backEnd/api/customerRouter')
const bodyParser = require('body-parser');
const  connectDB =  async()=>{
    try{
      console.log("Vao roi")
        await mongoose.connect(db,{useUnifiedTopology: true,useNewUrlParser: true});
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
app.use(morgan('dev'))
app.get('/',(rep,res)=>res.send('API Running'));
app.use('/api/users',require('./backEnd/api/use'))
app.use('/product',product);
app.use('/user',user);
app.use('/customer',customer)
app.use((rep,res,next)=>{
    const error = new Error('Not Found');
     error.status=404;
     next(error);
});
app.use((next,rep,res)=>{
  res.header('Access - Control','*');
  res.header(
    "Access - Control",
    "Origin , X-Request-With, Content-Type, Accept, Authorization"
    );
  if(rep.method==='OPTIONS'){
    res.header('Access - Control-Methods','PUT,POST,GET,DELETE,PATCH');
    return res.status(200).json({});
  }
  next();
})
app.use((error,rep,res,next)=>{
  res.status(error.status || 500);
   res.json({
     error:{
       message:error.message
     }
   })
})
var port = process.env.PORT || 5000;
  
  app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
  }); 