const express = require('express');
const app = express();
const port = 3030;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post('/login', (req, res) =>{
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let comments = req.body.comments;

    var verify = req.body.verification;
    res.json({first_name: first_name, last_name: last_name, email: email, comments: comments});

});
app.listen(port, ()=>{
    console.log("port is ruunging");
});