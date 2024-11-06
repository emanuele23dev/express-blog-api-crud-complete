const express = require("express");
const app = express();
app.use(express.static("public"));

const port = 3000;
const host = "http://127.0.0.1";

const posts = require("./db/posts.js");

app.listen(port, () => {
  console.log(`App listen on ${host}:${port}`);
});

app.get("/", (req, res) => {
  res.send("Express Blog Api Crud Complete");
});

// INDEX 
app.get("/posts", );

// SHOW 
app.get("/posts/:title", (req, res) => {
  const post = posts.find( post => post.title.toLowerCase() === req.params.title
  );
  // console.log(post);

if (!post) {
    return res.status(404).json({ error: `post con titolo ${req.params.title} non trovato` });
  }

  return res.status(200).json({
    data: post
  });
});
