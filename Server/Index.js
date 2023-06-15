var express = require("express");
var path=require("path");
var app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");



dotenv.config();


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("connected to MongoDB")
});
    
//     {useNewUrlParser: true},()=>{
//     console.log("connected to MongoDB")
// });

app.listen(3001, () =>{
    console.log("my life is a mess");
})
















































// app.set("port", process.env.PORT || 3001);
// const mysql = require("mysql");


// reuireddddddd starts
// const db=require("./models")

// db.sequelize.sync().then((req) =>{
//     app.listen(3001, () =>{
//         console.log("Server is running");
//     })
// })

// requireddd ends


// app.listen(app.get("port"), function(){
//     // console.log("Server started on port" + app.get("port"));
//     console.log("Server is running.")
// });

// const userRouter = require("./Routes/User");

// app.use("/users", userRouter);
// const adminBro = new AdminBro({
//     rootPath: "/admin",
//     loginPath: "/admin/login",
//     databases: [Facebook],
//     branding: {
//         companyName: "Job App Beginners",
//         softwareBrothers: false,
//     },
// });

