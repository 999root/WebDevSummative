
// Title
title = document.getElementById('title');
title.textContent = 'UN Sustainable Development Goals';

logo = document.querySelector('#logo');
logo.setAttribute("src", "/assets/logo.png");
logo.setAttribute("alt", "Logo of UN's development goals");

//Text resize buttons - fetch
button_section = document.getElementById("size_buttons");
fetch("scripts/json/size_buttons.json")
    .then(response => response.json())
    .then(buttons => {
        for (i of buttons) {
            button = document.createElement("button");
            button.setAttribute("class", i.class);
            button.setAttribute("id", i.id);
            button.setAttribute("type", "button");
            button.textContent = "";
            button_section.appendChild(button);
        }
    })
    .then(() => {
        //Size cap functions and event listeneres
        let header1_size = 35;
        headers1 = document.getElementsByTagName("h1");

        let header2_size = 17;
        headers2 = document.getElementsByTagName("h2");
        label = document.getElementsByTagName("label")

        let paragraph_size = 25;
        paragraphs = document.getElementsByTagName("p");
        links = document.getElementsByTagName("a");
        icons = document.getElementsByTagName("i");
        table_values = document.getElementsByTagName("th");

        function capSize_header1() {
            if (header1_size > 35) {
                header1_size = 35;
            } else if (header1_size < 25) {
                header1_size = 25;
            }
        }

        function capSize_header2() {
            if (header2_size > 24) {
                header2_size = 24;
            } else if (header2_size < 10) {
                header2_size = 10;
            }
        }

        function capSize_pargraph() {
            if (paragraph_size > 30) {
                paragraph_size = 30;
            } else if (paragraph_size < 10) {
                paragraph_size = 10;
            }
        }

        function sizeChange(text, size) {
            for (i of text) {
                i.style.fontSize = size + "px";
            }
        }


        //event listeners
        document.getElementById("increase_button").addEventListener("click", () => {
            console.log("increase");
            header1_size += 5;
            capSize_header1()
            sizeChange(headers1, header1_size);

            header2_size += 7;
            capSize_header2();
            sizeChange(headers2, header1_size);
            sizeChange(label, header2_size);

            paragraph_size += 10;
            capSize_pargraph();
            sizeChange(paragraphs, paragraph_size);
            sizeChange(links, paragraph_size);
            sizeChange(icons, header1_size);
            sizeChange(table_values, paragraph_size);


        })

        document.getElementById("decrease_button").addEventListener("click", () => {
            header1_size -= 5;
            capSize_header1()
            sizeChange(headers1, header1_size);

            header2_size -= 7;
            capSize_header2();
            sizeChange(headers2, header1_size);
            sizeChange(label, header2_size);

            paragraph_size -= 10;
            capSize_pargraph();
            sizeChange(paragraphs, paragraph_size);
            sizeChange(links, paragraph_size);
            sizeChange(icons, paragraph_size);
            sizeChange(table_values, paragraph_size);



        })
    })

