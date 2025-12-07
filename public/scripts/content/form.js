const formList = 'scripts/json/signup.json';
const imageList = 'scripts/json/signup_images.json';
const form = document.querySelector("form");
const section = document.querySelector("#form");
const form_header = document.querySelector("#form_title");
const form_message = document.querySelector("#form_message");



document.addEventListener("DOMContentLoaded", () => {
    //loading the form from json
    fetch(formList)
        .then(response => response.json())
        .then(a => {

            form_header.textContent = "Sign up to recieve the latest news!";


            for (i of a) {
                if (i.type === "submit") {
                    let input = document.createElement("input");
                    input.setAttribute("type", i.type);
                    input.setAttribute("value", i.label);
                    form.appendChild(input);
                } else {
                    let label = document.createElement("label");
                    label.textContent = i.label;
                    label.setAttribute("for", i.for);
                    form.appendChild(label);
                    form.appendChild(document.createElement("br"));

                    let input = document.createElement("input");
                    input.setAttribute("type", i.type);
                    input.setAttribute("id", i.id);
                    input.setAttribute("name", i.name);

                    if (i.id != "comments") {
                        input.setAttribute("required", "");
                    }

                    form.appendChild(input);
                }

                form.appendChild(document.createElement("br"));
                form.appendChild(document.createElement("br"));
            }
        })
        .then(() => {
            //submit listener - for now it just takes the values...i think :3
            let first_name = document.querySelector("#first_name");
            let last_name = document.querySelector("#last_name");
            let email = document.querySelector("#email");
            let comments = document.querySelector("#comments");

            document.addEventListener("submit", (event) => {

                event.preventDefault();


                ///posts the form information
                const submitBody = {
                    first_name: first_name.value,
                    last_name: last_name.value,
                    email: email.value,
                    comments: comments.value
                };



                const requestHeader = {
                    "Content-Type": "application/json"
                };


                fetch('/login', {
                    method: "POST",
                    headers: requestHeader,
                    body: JSON.stringify(submitBody)
                }).then(() => {
                    console.log(first_name.value, last_name.value, email.value, comments.value);
                    form.style.display = "none";
                    form_header.textContent = "Thank you!"
                    form_message.innerHTML = `We appreciate you singing for our form, ${first_name.value}.<br><br>If you desire to opt-out, email us on dconews@un.org.`;

                });



            })
        })

    //images..if you couldnt tell by the name idk
    fetch(imageList)
        .then(response => response.json())
        .then(img => {
            let imgSection = document.createElement("div");
            imgSection.setAttribute("id", "images");
            section.appendChild(imgSection);

            for (line of img) {
                let newImage = document.createElement("img");
                newImage.setAttribute("src", line.src);
                imgSection.appendChild(newImage);
            }
        })

})






