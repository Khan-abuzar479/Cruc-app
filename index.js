import express from 'express';
import mongoose, { connect, mongo } from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//Connect tomongoDb to mongos
const ConnectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase;", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
ConnectToDB();
const port = 4000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
res.send('abuzarkhan')
})
app.get('/login',(req,res)=>{
  res.send('<h1>this is a login page</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2>chai and code</h2>')
})
app.get('/about',(req,res)=>{
  res.send('this is about me')
})
app.get('/add',(req,res)=>{
  res.send('this is my address')
})
app.get('/Dob', (req, res) => {
  res.send("this is dob")
})
app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`);
  
})