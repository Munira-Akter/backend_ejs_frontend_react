const category = require("express").Router();

category.get("/", (req, res) => {
    res.send("I am from category routes");
});

module.exports = category;