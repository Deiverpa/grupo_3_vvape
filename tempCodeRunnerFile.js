const express = require ("express");
const path = require ("path");

const app = express ();

const publicPath = path.resolve(__dirname, './public')
app.use (express.static(publicPath))

app.listen (3001, () =>{
    console.log ("servidor corriendo en el puerto 3001")
});
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})