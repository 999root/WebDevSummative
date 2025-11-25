const formList = 'scripts/json/signup.json';
const imageList = 'scripts/json/signup_images.json';
const form = document.querySelector("form");
const section = document.querySelector("#form");


document.addEventListener("DOMContentLoaded", () => {
    //signup
    fetch(formList)
        .then(response => response.json())
        .then(a => {

            const header = document.querySelector("#form_title");
            header.textContent = "Sign up to recieve the latest news!";


            for (i of a) {
                if (i.type === "button") {


                    let input = document.createElement("input");
                    input.setAttribute("type", i.type);
                    input.setAttribute("id", i.id);
                    input.setAttribute("name", i.name);
                    input.setAttribute("value", i.label);
                    input.setAttribute("onclick", i.onclick)
                    form.appendChild(input);


                } else if (i.type === "submit") {
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
                    input.setAttribute("required", "");
                    console.log("name " + input.getAttribute("name"));
                    form.appendChild(input);

                }
                if (i.type != "email") {
                    form.appendChild(document.createElement("br"));
                    form.appendChild(document.createElement("br"));
                }
            }


        })
        .then(() => {
            //submit listener - not done yet
            let first_name = document.querySelector("#first_name");
            let last_name = document.querySelector("#last_name");
            let email = document.querySelector("#email");
            let comments = document.querySelector("#comments");

            document.addEventListener("submit", (event) => {

                event.preventDefault();
                console.log(first_name.value);

                const submitBody = {
                    first_name: first_name.value,
                    last_name: last_name.value,
                    email: email.value,
                    comments: comments.value
                };

                console.log(submitBody);

                const requestHeader = {
                    "Content-Type": "application/json"
                };


                fetch('/login', {
                    method: "POST",
                    headers: requestHeader,
                    body: JSON.stringify(submitBody)
                })
                    .then(response => response.json())
                    .then(info => {
                        console.log(info);
                        console.log(info.first_name, info.last_name, info.email, info.comments);
                    });

            })
        })

    //images
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








/*fetch(verMessage)
.then(response => response.json())
.then(message => {
    let close_button = document.createElement("button");
    close_button.setAttribute("id", "close_button");
    close_button.textContent = "X";
    verify_message.appendChild(close_button);
    


})*/





