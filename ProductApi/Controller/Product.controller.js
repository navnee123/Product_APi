//commonJS
//const Product = require("../Model/Product.Model.js");

//ES6
import Product from "../Model/Product.Model.js";

 export const getProducts=async(req,res)=>{
    try {
        const Products=await Product.find({});
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

 export const getProduct=async(req,res)=>{
    try {
       const {id}=req.params;
       const product=await Product.findById(id);
       if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
       res.status(200).json(product);
    } catch (error) {
       res.status(500).json({message:error.message})
    }
};

 export const createProduct=async(req, res) => {
    try {
       const newProduct= await Product.create(req.body);
       res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
        }
};


 export const updateProduct=async(req,res)=>{
    try {
        const {id }=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        const updatedProduct=await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


 export const deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:error.message});
        }
        res.status(200).json({message:"Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
        }
};
//CommonJS
//module.exports={getProducts,getProduct,createProduct,updateProduct,deleteProduct};