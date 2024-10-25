const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    const name = req.params.name;
    res.send(`Welcome to Data Respresentation & Querying ${name}`);
});

app.get('/hello/:name/:sname', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ` +req.params.name+ " " +req.params.sname);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

