const express=require("express");
const rutas=require("./rutas");
const app=express();

app.use("/",rutas);

app.listen(3000,()=>{
    console.log("servidor en http://localhost:3000")
});