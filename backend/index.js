const express = require("express")
const app = express();
const cors = require("cors");
const connection = require("./database/db");
const authRouter = require("./routers/auth.router");
const categoryRouter = require("./routers/category.router")
const productRouter = require("./routers/product.router");
const basketRouter = require("./routers/basket.router");
const orderRouter = require("./routers/order.router");

app.use(express.json());
app.use(cors());

// Controller
app.use("/api/auth",authRouter);
app.use("/api/categories",categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/baskets", basketRouter);
app.use("/api/orders", orderRouter);

connection();


const port = process.env.port || 5000;
app.listen(port,()=>{
    console.log("http://localhost:5000 ayakta!");
})