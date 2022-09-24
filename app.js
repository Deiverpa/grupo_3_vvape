const express = require ("express");
const path = require ("path");

const app = express ();

const publicPath = path.resolve(__dirname, './public')
app.use (express.static(publicPath))

app.listen (3005, () =>{
    console.log ("servidor corriendo en el puerto 3005")
});

app.get('/product',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/product.html'))
})
app.get('/product2',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/product2.html'))
})
app.get('/product3',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/product3.html'))
})
app.get('/product4',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/product4.html'))
})
app.get('/esencia1',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/esencia1.html'))
})
app.get('/esencia2',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/esencia2.html'))
})
app.get('/esencia3',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/esencia3.html'))
})
app.get('/esencia4',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/esencia4.html'))
})
app.get('/productindex',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productindex.html'))
})
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.get('/index',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
app.get('/shoppingcart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/shoppingcart.html'))
    
})
app.get('/newproduct',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/newproduct.html'))
})
app.get('/modifyproduct',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/modifyproduct.html'))
})
