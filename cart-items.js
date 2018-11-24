"use strict";
const express = require("express");
const items = express.Router(); 
const pool = require("./connection/pg-connection-pool.js")

// methods to define endpoints
items.get("/items", (req, res) => {
    pool.query("select * from ShoppingCart").then((result) => {
        res.json(result.rows);
    })
})
items.post("/items", (req, res) => {
    pool.query("insert into ShoppingCart(product, price, quantity)values($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(()=>{
        pool.query("select * from ShoppingCart").then((result) => {
            res.json(result.rows); 
        })
    })
})
items.put("/items/:id", (req, res) => {
    pool.query("update ShoppingCart set product=$2::text, price=$3::int, quantity=$4::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("select * from ShoppingCart").then((result) => {
            res.json(result.rows); 
        })
    })
    // shoppingList[req.params.id] = req.body; 
    // res.json(shoppingList)
})
items.delete("/items/:id", (req, res) => {
    pool.query("delete from ShoppingCart where id=$1::int", [req.params.id]).then(() => {
        pool.query("select * from ShoppingCart").then((result) => {
            res.json(result.rows); 
        })
    })
})

module.exports = items; 