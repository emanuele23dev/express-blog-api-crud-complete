const express = require('express')
const app = express()
app.use(express.static("public"));

const port = 3000
const host = 'http://127.0.0.1'

app.listen(port, () => {
    console.log(`App listen on ${host}:${port}`);
})

app.get('/', (req,res) => {
    res.send('Express Blog Api Crud Complete');
})
    
    