// require the express module
const express = require("express");
const app = express(); 
const items = require("./cart-items.js"); 


// 
app.use(express.static("./public"));
app.use(express.json());
app.use("/", items); 

const port = process.env.PORT || 3000; 


// run the server
app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
})