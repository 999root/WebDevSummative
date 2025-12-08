const express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer');
const crypto = require("crypto");
const { body } = require("express-validator");
const app = express();
const port = 3030;

app.use(express.static("public"));//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

////nodemailer///

let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "realundevgoals.noreply@gmail.com",
        pass: "ownvcypqwmxyqqzg"
    }
})





////Saves the posted inforation in JSON & sends an Email///
app.post('/login', [
    body('passkey').isLength({ min: 7 })
]
    , async (req, res) => {
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        const email = req.body.email;
        let comments = req.body.comments;
        let passkey = req.body.passkey

        let email_maker = {
            from: "realundevgoals.noreply@gmail.com",
            to: email,
            subject: "This email have been signed-up for UN dev goals!",
            text: `Dear ${first_name}\n\nThank you for signing up for the UN-development goals news.\nYou will receive the latest news about our work through this email.\nYou want to unsubscribe? Just email dconews@un.org about it.\n\n Do not forget you passkey: ${passkey}\n\nHave a nice day!`
        }

        sendEmail(email_maker);


        fs.readFile("storage.json", function (err, result) {
            var astring = JSON.parse(result);
            console.log(astring);
            var new_info = {
                "first_name": first_name,
                "last_name": crypto.createHash("sha256").update(last_name).digest("hex"),
                "email": email,
                "comments": comments,
                "passkey": crypto.createHash("sha3-512").update(passkey).digest("hex")
            }


            astring.push(new_info);
            fs.writeFileSync("storage.json", JSON.stringify(astring));
        }
        )
        res.json({ first_name: first_name, last_name: last_name, email: email, comments: comments });


    })


function sendEmail(email_maker) {
    console.log("Function called");
    transport.sendMail(email_maker, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("email sent");
        }
    })
}


app.listen(port, () => {
    console.log("port is ruunging");
});

/// Reference - Nodemailer ///
/// Nodemailer | Nodemailer (no date). Available at: https://nodemailer.com/ (Accessed: 7 December 2025).///
