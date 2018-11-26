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
    pool.query("update ShoppingCart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
        pool.query("select * from ShoppingCart").then((result) => {
            res.json(result.rows); 
        })
    })
  
})
items.delete("/items/:id", (req, res) => {
    pool.query("delete from ShoppingCart where id=$1::int", [req.params.id]).then(() => {
        pool.query("select * from ShoppingCart").then((result) => {
            res.json(result.rows); 
        })
    })
})

module.exports = items; 