//console.log("Working ...")

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public", {

    extensions: ["html"]
}));


app.get ("/", (req, res) => {
    //res.send('<h2>Hello world</h2>')
    res.redirect('/index.html')
})

app.use((req, res, next) => {
    res.status(404) //.send("This page is not found.")
    res.redirect('/e404.html')
})

app.listen(8000, () => {
    //console.log("Server is listening on port 8000. Ready to accept requests.");
    });