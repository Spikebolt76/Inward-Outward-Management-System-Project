const express = require('express');
const app = express()
const PORT = 3000

app.use(json())
app.get('/', (req, res) => {
    res.send("Welcome to the Inward-Outward Management Interface!");
});

app.post('/', (req, res) => {
    
    res.send(req.body);
})

app.listen(PORT, () => {
    console.log("Server listening on port : ", PORT);
});

