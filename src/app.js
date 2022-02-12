const path = require('path');
var express = require('express');
const app = express();
const hbs =require('hbs');
const res = require('express/lib/response');
const port =4000;

const staticPath =path.join(__dirname,'../public');
const templatePath=path.join(__dirname,"../views");
const partialsPath=path.join(__dirname,"../views/partials");

app.use(express.static(staticPath));
// app.set("views","../views");
app.set("view engine","hbs");
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

 app.get("/",(req,res)=>{
     res.render("index");
 });
 app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/sem3",(req,res)=>{
    res.render("sem3");
});
app.get("/sem4",(req,res)=>{
    res.render("sem4");
});
app.get("/books",(req,res)=>{
    res.render("books");
});
app.get("/youtubelinks",(req,res)=>{
    res.render("youtubelinks");
});
app.get("/book",(req,res)=>{
    res.render("book");
});
app.get('about/*',(req,res)=>{
    res.render('404',{
        Errorcomment:"Oops,Sorry this page isnot available"
    });
});

app.get('*',(req,res)=>{
    res.render('404',{
        Errorcomment:"Oops,Sorry this page isnot available"
    });
});
app.listen(port,()=>{
    console.log(`listening to port ${port} `)
}
);