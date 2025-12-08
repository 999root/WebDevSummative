let abouttitle = document.querySelector("#abouttitle");
let table = document.querySelector("#team_table")
console.log(abouttitle);
abouttitle.textContent = "About us";
let main = document.querySelector('#aboutsection');






document.addEventListener('DOMContentLoaded', () => {

    fetch("scripts/json/about.json")
    .then(response => response.json())
    .then(information => {
        for(i of information){
            let section = document.createElement("section");
            section.setAttribute('class','aboutclass');
            let name = document.createElement('h2')
            name.textContent = i.Name;
            section.appendChild(name);

            let email = document.createElement('h2');
            email.textContent = i.Email;
            section.appendChild(email);


            let bio = document.createElement('h2');
            bio.textContent = i.Bio;
            section.appendChild(bio);
            

            let projectrole = document.createElement('h2');
            projectrole.textContent = i.Role;
            section.appendChild(projectrole);






            main.insertBefore(section, table);
        }
    })
    

    fetch("scripts/json/table.json")
    .then(response => response.json())
    .then(info =>{
        for(i of info){
            let tr = document.createElement("tr");
            let value1 = document.createElement('th');
            value1.textContent = i.value1;
            tr.appendChild(value1);
           
            let value2 = document.createElement('th');
            value2.textContent = i.value2;
            tr.appendChild(value2);

            let value3 = document.createElement('th');
            value3.textContent = i.value3;
            tr.appendChild(value3);
            
            table.appendChild(tr)
        }
        

    })


   /* fetch(aboutjson)
    .then(response => response.json())
    .then(responseData => {
        for (item of responseData){
            const about = document.createElement('article');
            main.appendChild(about)


        }
    })*/
})