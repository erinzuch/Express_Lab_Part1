"use strict";
const express = require("express");
const items = express.Router(); 

const shoppingList = [
    {
        id: 0, 
        product: "cookies",
        price: 3,
        quantity: 1,
    }, 
    {
        id: 1, 
        product: "candles",
        price: 10,
        quantity: 2
    },
    {
        id: 2, 
        product: "tea",
        price: 2,
        quantity: 1, 
    },
    {
        id: 3, 
        product: "avocado",
        price: 2,
        quantity: 3,
    }
];
// methods to define endpoints
items.get("/items", (req, res) => {
    res.json(shoppingList);
}); 

items.post("/items", (req, res) => {
    console.log(req.body); 
})

items.put("/items/_ID_", (req, res) => {
    console.log("/items/_ID_");
    // shoppingList[req.params.id] = req.body; 
    // res.json(shoppingList)
})
items.delete("/items/_ID_", (req, res) => {
    console.log("/items/_ID_");
})

module.exports = items; 