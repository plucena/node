const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const dbConnection = require("./connection");

// db
dbConnection();

// cors
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", require('./routes/productRoutes'));

app.get('/', (req,resp,next) => {
 resp.send('Hello World 2');
});

app.listen(port, ()=> {
    console.log('hello');
});