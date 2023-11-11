console.log("this is express JS hello world")

import express from "express";
const app = express()

app.get("/", (req, res) => {
    console.log("Hello world!", new Date())
    res.send("Hello world! " + new Date())
})

app.get("/profile", (req, res) => {
    console.log("this is profle", new Date())
    res.send("This is profle! " + new Date())
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
});