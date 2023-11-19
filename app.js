const express = require("express");
const noteRouter = require("./src/routers/note-routers.js");
const userRouter = require("./src/routers/user-routers.js");
require("dotenv").config();

const app = express();

const dbconnect = require("./src/db/mongoose.js");

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());

app.use(noteRouter);
app.use(userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
    dbconnect();
});
