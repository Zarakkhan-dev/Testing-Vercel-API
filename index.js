const express = require("express");

const app = express();

app.get("/",()=>{
    res.send("Server is Running ")
} )

app.listen(3000);