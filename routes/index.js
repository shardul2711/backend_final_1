const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModels = require("../models/product-models");
const router = express.Router();

router.get("/", function(req , res){
    let error = req.flash("error");
    res.render("index" , {error});
});

router.get("/shop" , isLoggedIn , async function(req , res){
    let products = await productModels.find()
    res.render("shop" , { products });
})

router.get("/logout" , isLoggedIn , function(req , res){
    res.render("shop");
})

module.exports = router;