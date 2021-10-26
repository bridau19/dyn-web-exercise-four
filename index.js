const express = required("express");
const app = express();

const port = 4000;

const indexRoute = require("./routes/index");

app.use("/", indexRoute);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});