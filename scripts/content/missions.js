document.addEventListener('DOMContentLoaded', () => {
  const missionList = document.getElementById('mission-list');

  fetch('data/missions.json')
    .then(response => response.json())
    .then(missions => {
      missions.forEach(mission => {
        const article = document.createElement('article');
        article.className = 'mission-article';

        // Create flex container for image + text
const contentWrapper = document.createElement('div');
contentWrapper.className = 'mission-content';

// Image
const img = document.createElement('img');
img.src = mission.image;
img.alt = mission.title;
img.className = 'mission-image';
contentWrapper.appendChild(img);

// Text container
const textWrapper = document.createElement('div');
textWrapper.className = 'mission-text';

// Header
const h2 = document.createElement('h2');
h2.textContent = mission.title;
textWrapper.appendChild(h2);

// Paragraphs
mission.paragraphs.forEach(text => {
  const p = document.createElement('p');
  p.textContent = text;
  textWrapper.appendChild(p);




// Buttons container
const buttonContainer = document.createElement("div");
buttonContainer.className = "mission-buttons"; //css

// 4 buttons
const buttonNames = ["The issue", "What to Change", "How"];
buttonNames.forEach(name => {
  const btn = document.createElement("button");
  btn.textContent = name;
  btn.className = "selection";
  buttonContainer.appendChild(btn);
});

// Append the buttons container under the text
textWrapper.appendChild(buttonContainer);

});



contentWrapper.appendChild(textWrapper);
article.appendChild(contentWrapper);


        missionList.appendChild(article);
      });
    })
    .catch(error => {
      console.error('Error loading missions:', error);
      missionList.innerHTML = '<p>Unable to load missions at this time.</p>';
    });
});
