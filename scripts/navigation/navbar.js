
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
if (missionspages) {
  const missionlink = missionspages.querySelector('a');
  missionlink.innerHTML = 'Missions';
  missionlink.href = 'missions.html';
  
  
  const dropdownMenu = missionspages.querySelector('ul');
  if (dropdownMenu) {
    dropdownMenu.remove();
  }
};

