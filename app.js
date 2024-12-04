const express = require('express');
const app = express();
const morgan = require('morgan');


// Connect to MongoDB database
const dbconnection = require('./config/db');

const userModel= require('./models/user');

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));;


app.use(function(req, res, next) {
    console.log("middleware works")
    next();
})

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("main");
});


app.get("/register", function(req, res){
    res.render("register");
 });
app.post("/register", async function(req, res){
   const {username,email, password} = req.body;

  const newUser= await userModel.create(
    {username: username,
         email: email,
         password: password});

res.send("newUser");

    });

    app.get("/get-users", function(req, res){
    userModel.find().then(function(users){
        res.send(users);
 })
    });
 app.get("/update-user", async function(req, res){
   await userModel.findOneAndUpdate({username: "noor1"},
        {
            username: "noor3",
    
        }
    )
res.send("user");
});

app.get("/delete-user", async (req, res)=>{
    await userModel.findOneAndDelete({
        username: "noor3"

    })
    res.send("user deleted");
})
app.post("/get-form-data", function(req, res){
    console.log(req.body);
    console.log("data received")
    
});

app.listen(3000);