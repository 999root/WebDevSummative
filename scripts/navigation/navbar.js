
// Nav Links

// Home Page Link
const home = { name: "Home", href: "/"}

const homepage = document.getElementById('home-page-nav-link');
const hplink = homepage.querySelector('a');
hplink.textContent = home.name;
hplink.href = home.href;

// About Page Link
const about = { name: "About", href: "/about" }

const aboutpage = document.getElementById('about-page-nav-link');
const aplink = aboutpage.querySelector('a');
aplink.textContent = about.name;
aplink.href = about.href;

// Contact Page Link
const contact = { name: "Contact", href: "/signup.html"}

const contactpage = document.getElementById('contact-page-nav-link');
const contactlink = contactpage.querySelector('a');
contactlink.textContent = contact.name;
contactlink.href = contact.href;

// Missions Link
const missionspages = document.getElementById('missions-nav-links');
const missionlink = missionspages.querySelector('a');
missionlink.innerHTML = 'Missions <i class="fa-solid fa-caret-down"></i>';
missionlink.href = '#';

const missions = [
  { name: 'Clean Water and Sanitisation', href: '/cws' },
  { name: 'Life Below Water', href: '/lbw' },
  { name: 'Responsible, Consumption and Production', href: '/rcp' }
];

const childLinks = document.querySelectorAll('#missions-nav-links ul li a');

childLinks.forEach((link, index) => {
  link.textContent = missions[index].name;
  link.href = missions[index].href;
});