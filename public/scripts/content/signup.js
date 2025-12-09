document.addEventListener('DOMContentLoaded', () => {

    let myForm = document.querySelector('form')
    let myName = document.querySelector('#name')
    let myEmail = document.querySelector('#email')
    let confirmMessage = document.querySelector('#confirmMessage')

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        confirmMessage.textContent=`Hi ${myName.value}, your message has been received, we will contact you at ${myEmail.value}`;
    });
});
