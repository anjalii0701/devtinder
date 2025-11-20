const express =require("express");

const app =express();

app.use("/test",(req,res)=>{
    res.send("helo ")
});
app.use("/hello",(req,res)=>{
    res.send("heello from the server")
});


app.listen(3000 ,()=>{
    console.log("server is successfully listening")
});