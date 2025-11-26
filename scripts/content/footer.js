let footer_json = "scripts/json/footer.json";
const footer_element = document.querySelector("footer");

document.addEventListener("DOMContentLoaded", () => {
    fetch(footer_json)
        .then(response => response.json())
        .then(list_column => {
            for (i of list_column) {
                let list = document.createElement("ul");
                list.setAttribute("class", "footer_list");
                let list_item = document.createElement("li");
                list.appendChild(list_item);

                let list_title = document.createElement("h3");
                list_title.textContent = i.title;
                list_item.appendChild(list_title);

                for (line of i.links) {
                    let list_item = document.createElement("li");
                    list_item.setAttribute("class", i.class);
                    list.appendChild(list_item);

                    if (line.href == "") {
                        let list_link = document.createElement("p");
                        list_link.innerHTML = line.context;
                        list_item.appendChild(list_link);

                    } else {
                        let list_link = document.createElement("a");
                        list_link.setAttribute("href", line.href);

                        if (i.title == "Social media links:") {
                            let list_icon = document.createElement("i");
                            list_icon.setAttribute("class", line.icon_class);
                            list_link.appendChild(list_icon);
                        } else {
                            list_link.innerHTML = line.context;
                        }

                        list_item.appendChild(list_link);

                    }

                }
                footer_element.appendChild(list);
            }

        })
})