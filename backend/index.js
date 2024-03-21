const express = require("express")
const app = express();
const cors = require("cors");
const connection = require("./database/db");
const authRouter = require("./routers/auth.router");
const categoryRouter = require("./routers/category.router")

app.use(express.json());
app.use(cors());

// Controller
app.use("/api/auth",authRouter);
app.use("/api/categories",categoryRouter);

connection();


const port = process.env.port || 5000;
app.listen(port,()=>{
    console.log("http://localhost:5000 ayakta!");
})