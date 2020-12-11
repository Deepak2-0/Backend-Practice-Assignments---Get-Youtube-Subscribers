
const express = require('express');
const app = express()
const Subscribers  = require("./models/subscribers");

 
// Your code goes here
app.get("/", (req,res)=>{
    res.send("hello");
});

app.get("/subscribers", async(req,res)=>{

    let subscriber = await Subscribers.find({});
    //console.log(subscriber);
    res.send(subscriber);
})

app.get("/subscribers/names", async(req,res)=>{

    let names = await Subscribers.find({}, {_id:0, name:1, subscribedChannel:1});
    //console.log(subscriber);
    res.send(names);
})


app.get("/subscribers/:id", async(req,res)=>{

    let id  = req.params.id;

    let subscriber = await Subscribers.find({_id:id});
    //console.log(subscriber);
    res.send(subscriber);
    //res.send(id);
})

module.exports = app;
