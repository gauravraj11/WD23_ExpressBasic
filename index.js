const express = require('express');
const result = require('./product')
const server = express();

server.get('/', (req,res)=>{
   res.send(result.data)
})

server.get('/about', (req,res)=>{
    res.send(JSON.stringify({"name":"gaurav", "desig": "faculty"}))
 })
 server.get('/contact', (req,res)=>{
    res.send("Our first Express server...Contact Page.....")
 })

 server.post('/', (req,res)=>{
    res.send("Post Response.....Home Page...")
 })
 
 server.post('/about', (req,res)=>{                   
    
     res.send(JSON.stringify({"name":"gaurav", "desig": "faculty"}))
  })
  server.post('/contact', (req,res)=>{
     res.send("Post Response...Contact Page.....")
  })
  server.put('/', (req,res)=>{
    res.send("Put Response.....Home Page...")
 })
 server.patch('/', (req,res)=>{
    res.send("Patch Response.....Home Page...")
 })

 server.delete('/', (req,res)=>{
    res.send("Delete Response.....Home Page...")
 })



server.listen(11000, ()=>{
    console.log("server running on port no 11000");
    
});