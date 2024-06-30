// const express = require("express");
// const mongoose = require("mongoose");
// require('dotenv').config();
// const Product = require("./Model/Product.Model.js");
// const productRoute = require("./Route/Product.route.js");
// const connectDB=require("./db/indexDb.js");



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import Product from "./Model/Product.Model.js";
import productRoute from "./Route/Product.route.js";
import connectDB from "./db/indexDb.js";




dotenv.config({
    path: './.env'
})

const app=express();
const port=process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//route
app.use("/api/products",productRoute);


//connection of database to application
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err)
    })
