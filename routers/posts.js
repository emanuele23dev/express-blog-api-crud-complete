const express = require('express')
const router = express.Router()

const postsControllers = require('../controllers/postControllers.js')

// INDEX 
router.get("/", postsControllers.index);


// SHOW 
router.get("/:title", postsControllers.show);


// STORE 
router.post('/', postsControllers.store)


// PUT 
router.put('/:title', postsControllers.update)


// DELETE 
router.delete('/:title', postsControllers.destroy)


module.exports = router