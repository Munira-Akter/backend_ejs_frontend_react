const { urlencoded } = require("express");
const express = require("express");
const globalErrorHandeler = require("./helpers/error");
const app = express();

// Use All Middleware
app.use(express.json());
app.use(urlencoded({ extends: false }));

// Route declare
app.use("/category", require("./routes/category"));

// Global Error Handleling
globalErrorHandeler(app);

// app listner call
app.listen(5000, () => {
    console.log("Server is running on PORT 5000");
});