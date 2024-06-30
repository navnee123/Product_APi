//const express = require("express");
// const Product = require("../Model/Product.Model.js");
// const router = express.Router();
// const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../Controller/Product.controller.js');


import express from "express"
const router =express.Router();
//import  router from express.Router();
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../Controller/Product.controller.js";
//import Product from "../Model/Product.Model.js";

router.get("/",getProducts);
router.get("/:id",getProduct);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

//ES6
export default router;
//Commonjs
// module.exports=router;