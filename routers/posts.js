const express = require('express')
const router = express.Router()

const postsControllers = require('../controllers/postControllers.js')


// INDEX 
router.get("/posts", postsControllers.index);



// SHOW 
router.get("/posts/:title", postsControllers.show);




module.exports = router