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
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.get('/shoppingcart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/shoppingcart.html'))
    
})
