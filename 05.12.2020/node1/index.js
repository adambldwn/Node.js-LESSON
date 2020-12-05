const express = require("express");
require("dotenv").config()

const port = process.env.port || 5001;
const host = "localhost";
const app = express();

app.listen(port, () => {
    console.log("I'm listening on http://%s:%s", host, port);
});