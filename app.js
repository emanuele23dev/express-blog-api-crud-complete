const express = require("express");
const app = express();
app.use(express.static("public"));

const port = 3000;
const host = "http://127.0.0.1";

const posts = require("./db/posts.js");

const postsControllers = require('./controllers/postControllers.js')

app.listen(port, () => {
  console.log(`App listen on ${host}:${port}`);
});

app.get("/", (req, res) => {
  res.send("Express Blog Api Crud Complete");
});


// INDEX 
app.get("/posts", postsControllers.index);



// SHOW 
app.get("/posts/:title", postsControllers.show);
