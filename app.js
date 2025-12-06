const express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer');
const app = express();
const port = 3030;

// doesnt work in here - app.use(express.static("public"));//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

////failed use of nodemailer - dont mind it////

/*let key = "ownv cypq wmxy qqzg";
let transport = nodemailer.createTransport({
    service: "gmail",
    auth :{
        user: "realundevgoals.noreply@gmail.com",
        pass: process.env.key
    }
})
    
/*let email_maker = {
        from: "realundevgoals.noreply@gmail.com",
        to: email,
        Subject: "test",
        text: "text"
    }

    transport.sendMail(email_maker, (err) =>{
        if(err){
            console.log(err);
        }
    })*/


//await console.log(fs.readFile('/no/public/context.json', 'utf8'));*/




////trying to save the data in a json, it works but doesnt have hashing or other security measures////
app.post('/login', async (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let comments = req.body.comments;


    res.json({ first_name: first_name, last_name: last_name, email: email, comments: comments });
    fs.readFile("storage.json", async function (err, result) {
        var astring = JSON.parse(result);
        console.log(astring);
        var new_info = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "comments": comments
        }
        astring.push(new_info);
        console.log(astring);
        fs.writeFileSync("storage.json", JSON.stringify(astring));
    }
    )

});


app.listen(port, () => {
    console.log("port is ruunging");
});