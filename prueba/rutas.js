const rutas=require("express").Router();

var{men,fec}=require("./middleware");

rutas.get("/",men,fec,(req,res)=>{
    res.send("hola mundo")
});

rutas.get("/home",men,fec,(req,res)=>{
    res.send("Esta es tu casa pa")
});

module.exports=rutas;