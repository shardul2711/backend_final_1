const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongoose-connection")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine" , "ejs");

app.use("/owners" , ownerRouter);
app.use("/products" , productRouter);
app.use("/users" , usersRouter);

app.listen(3000);