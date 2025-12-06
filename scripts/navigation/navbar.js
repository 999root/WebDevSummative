// navbar.js
fetch('/scripts/json/navbar.json')
  .then(res => {
    if (!res.ok) throw new Error('Failed to load navbar.json: ' + res.status);
    return res.json();
  })
  .then(data => {
    // Home
    const homepage = document.getElementById('home-page-nav-link');
    if (homepage) {
      const hplink = homepage.querySelector('a') || homepage.appendChild(document.createElement('a'));
      hplink.textContent = data.home.name;
      hplink.href = data.home.href;
    }

    // About
    const aboutpage = document.getElementById('about-page-nav-link');
    if (aboutpage) {
      const aplink = aboutpage.querySelector('a') || aboutpage.appendChild(document.createElement('a'));
      aplink.textContent = data.about.name;
      aplink.href = data.about.href;
    }

    // Contact
    const contactpage = document.getElementById('contact-page-nav-link');
    if (contactpage) {
      const contactlink = contactpage.querySelector('a') || contactpage.appendChild(document.createElement('a'));
      contactlink.textContent = data.contact.name;
      contactlink.href = data.contact.href;
    }

    // Missions (parent + dynamically generated children)
    const missionsContainer = document.getElementById('missions-nav-links');
    if (missionsContainer) {
      // Ensure there is an anchor for the parent
      let parentA = missionsContainer.querySelector('a');
      if (!parentA) {
        parentA = document.createElement('a');
        missionsContainer.appendChild(parentA);
      }

      // Insert Font Awesome caret in innerHTML to show the icon
      // (Font Awesome must be included in your HTML — see note below)
      parentA.innerHTML = `${data.missionsParent.name} <i class="fa-solid fa-caret-down" aria-hidden="true"></i>`;
      parentA.href = data.missionsParent.href;

      // Ensure there is a UL to hold children; create if missing
      let ul = missionsContainer.querySelector('ul');
      if (!ul) {
        ul = document.createElement('ul');
        missionsContainer.appendChild(ul);
      }

      // Clear any existing children and build from JSON (this avoids missing links)
      ul.innerHTML = '';
      data.missions.forEach(m => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = m.name;
        a.href = m.href;
        li.appendChild(a);
        ul.appendChild(li);
      });
    }
  })
  .catch(err => {
    // keep console error but don't break the rest of the page
    console.error(err);
  });
