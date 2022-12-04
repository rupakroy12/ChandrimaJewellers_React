const express = require('express');
const app = express();
const hbs = require("hbs");

const path = require('path');

var staticPath = path.join(__dirname, "../public");
var templatePath = path.join(__dirname, "../templates");
var partialsPath = path.join(__dirname, "../templates/partials");



//builtin middleware --> serve static website
app.use(express.static(staticPath));


//to set view engine for eg: hbs/pug/ejs
app.set("view engine", "hbs");

//to set view engine
app.set("views", templatePath);

//registering partials folder
hbs.registerPartials(partialsPath); 

//Routing begins .............................................................................


//routing homepage
app.get("/", (req, res )=> {
    
    res.render('homepage', {
        user : "baby"
    })

});



app.get("/about", (req,res)=>{
    res.send("Hello from About page")
})

app.get("/products", (req,res)=>{
    res.render("products")
})





app.get("*", (req,res) => {
    res.send("This page cant be found")

})


//Routing ends....................................................................................





//setting up server
app.listen(8000, ()=>{
    console.log("Listening the port at 8000");
});


