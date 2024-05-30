const express=require('express');
const http=require('http');

const app=express();

app.get('/',(req,res)=>{
      return res.send(`Hello From Home Page`);
});

app.get("/about",(req,res)=>{
      return res.send(`Hello ${req.query.name}`);
});

app.listen(8000,()=> console.log("Server started"));

// ab apne ko in dono lines ki jarurat nahi kyuki express app apne aap http requires karege aur apne aap hi server banake uspe listen laga dege

// const http=require('http')
// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log('Server Started'))