const express = require("express");
const app = express();

// OPTIONAL 
app.use(express.static("public"));

const port = 3000;
const host = "http://127.0.0.1";

// const posts = require("./db/posts.js");

// const postsControllers = require('./controllers/postControllers.js')

const postsRoutes = require('./routers/posts.js')

app.use('/posts', postsRoutes)


app.listen(port, () => {
  console.log(`App listen on ${host}:${port}`);
});

app.get("/", (req, res) => {
  res.send("Express Blog Api Crud Complete");
});

