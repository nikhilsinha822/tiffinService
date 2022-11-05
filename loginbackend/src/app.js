const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.port || 5000;


require("./db/conn")
const Register = require("./models/registers")

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path)
hbs.registerPartials(partials_path)

console.log(static_path);


app.get("/", (req, res)=>{
  res.render("index")
});  
app.get("/register", (req,res)=>{
   res.render("register") 
})
app.post("/register", async (req,res)=>{
     try{
        const CustomerDetail = new Register({
        name: req.body.name,
        email: req.body.email,   
        phoneno:req.body.phoneNumber,
        address:req.body.Address
        })

        const register = await CustomerDetail.save();
        res.status(201).render("index");
     } catch (e) {
        res.status(400).send(e);
     }
 })
app.get("/login", (req,res)=>{
    res.render("login")
})

//console.log(path.join(__dirname, "../public"));



app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`)
})