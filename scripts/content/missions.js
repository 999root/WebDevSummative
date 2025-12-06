document.addEventListener('DOMContentLoaded', () => {
  const missionList = document.getElementById('mission-list');

  fetch('scripts/json/missions.json')
    .then(response => response.json())
    .then(missions => {

      // ===============================
      // BUILD MISSIONS
      // ===============================
      missions.forEach(mission => {
        const article = document.createElement('article');
        article.className = 'mission-article';
        article.id = `mission-${mission.id}`;

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'mission-content';

        // Image
        const img = document.createElement('img');
        img.src = mission.image;
        img.alt = mission.title;
        img.className = 'mission-image';
        contentWrapper.appendChild(img);

        // Text
        const textWrapper = document.createElement('div');
        textWrapper.className = 'mission-text';

        const h2 = document.createElement('h2');
        h2.textContent = mission.title;
        textWrapper.appendChild(h2);

        mission.paragraphs.forEach(text => {
          const p = document.createElement('p');
          p.textContent = text;
          textWrapper.appendChild(p);
        });

        // Buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "mission-buttons";

        ["The issue", "What to Change", "How"].forEach(name => {
          const btn = document.createElement("button");
          btn.textContent = name;
          btn.className = "selection";
          buttonContainer.appendChild(btn);
        });

        textWrapper.appendChild(buttonContainer);

        contentWrapper.appendChild(textWrapper);
        article.appendChild(contentWrapper);
        missionList.appendChild(article);
      });


      // ===============================
      // SCROLL TO MISSION AFTER RENDER
      // ===============================

      function scrollToElementById(id) {
        const el = document.getElementById(id);
        if (!el) return false;

        const header = document.querySelector('.site-header'); // adjust if needed
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const elementTop = el.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementTop - headerHeight - 10,
          behavior: 'smooth'
        });

        return true;
      }

      function getTarget() {
        if (location.hash) {
          return location.hash.replace('#', '');
        }

        const stored = sessionStorage.getItem('scrollToMission');
        return stored || null;
      }

      const targetId = getTarget();

      if (targetId) {
        requestAnimationFrame(() => {
          let attempts = 0;
          const maxAttempts = 15;

          const tryScroll = () => {
            attempts++;

            if (scrollToElementById(targetId)) {
              sessionStorage.removeItem('scrollToMission');
              history.replaceState(null, '', `${location.pathname}#${targetId}`);
            } else if (attempts < maxAttempts) {
              setTimeout(tryScroll, 100);
            } else {
              console.warn('Scroll target not found:', targetId);
            }
          };

          tryScroll();
        });
      }

    })
    .catch(error => {
      console.error('Error loading missions:', error);
      missionList.innerHTML = '<p>Unable to load missions at this time.</p>';
    });
});
