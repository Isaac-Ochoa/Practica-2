const express=require("express");
const app = express();

function fec(req,res,next){
    let now = new Date();
    console.log("fec: "+ now);
    next();
};

function men(req,res,next){
    console.log("Que hay pa ;D");
    next();
};

module.exports={
    men,
    fec
};