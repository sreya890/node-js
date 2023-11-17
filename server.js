const express = require("express");
const app = express();
const path=require("path");


app.get("/1st",(req,res)=>{
    res.sendFile(path.join(__dirname,"1st.html"));
})
app.get("/2nd",(req,res)=>{
        res.sendFile(path.join(__dirname,"2nd.html"));
})
app.get("/3rd",(req,res)=>{
            res.sendFile(path.join(__dirname,"3rd.html"));
})


app.listen(3978,()=>{

    console.log("server is running");
})