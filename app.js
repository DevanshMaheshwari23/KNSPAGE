// const express=require("express");
// const app=express();
// const path=require("path");
// const port=5500;

// app.set("view engine","ejs");

// app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

// app.get(("/form"),(req, res)=>{
//     res.render("form.ejs");

// });
// app.get(("/thankyou"),(req,res)=>{
//     res.render("thankyou.ejs");
// });

// app.get("/",(req,res)=>{
//     res.sendFile("index.html"),{root:__dirname};
// });
// // ,{root:__dirname}

// app.listen(port,()=>{
//     console.log("App is listining on port 8080");
// });
const express = require("express");
const app = express();
const path = require("path");

// Set the port
const port = process.env.PORT || 5500;  // Vercel sets PORT in the environment variables

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the form page
app.get("/form", (req, res) => {
    res.render("form.ejs");
});

// Route for the thank you page
app.get("/thankyou", (req, res) => {
    res.render("thankyou.ejs");
});

// Route for the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server on port 5500
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
