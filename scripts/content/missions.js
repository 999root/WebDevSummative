document.addEventListener('DOMContentLoaded', () => {
  const missionList = document.getElementById('mission-list');

  fetch('data/missions.json')
    .then(response => response.json())
    .then(missions => {
      missions.forEach((mission) => {
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


        const dynamicTextContainer = document.createElement('div');
        dynamicTextContainer.className = 'mission-dynamic-text';
        
// Show the "issue" text by default
        if (mission.paragraphs && mission.paragraphs.issue) {
          const defaultParagraph = document.createElement('p');
          defaultParagraph.textContent = mission.paragraphs.issue;
          dynamicTextContainer.appendChild(defaultParagraph);
        }
        
        textWrapper.appendChild(dynamicTextContainer);

// Buttons container
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "mission-buttons";

// Buttons
        const buttons = [
          { name: "The issue", section: "issue" },
          { name: "What we can do", section: "whatdo" },
        
        ];
        
        buttons.forEach((buttonInfo, index) => {
          const btn = document.createElement("button");
          btn.textContent = buttonInfo.name;
          btn.className = "selection";
          
//  click event
          btn.addEventListener('click', function() {
            
            if (mission.paragraphs && mission.paragraphs[buttonInfo.section]) {
              
              dynamicTextContainer.innerHTML = '';
              const newParagraph = document.createElement('p');
              newParagraph.textContent = mission.paragraphs[buttonInfo.section];
              dynamicTextContainer.appendChild(newParagraph);
              
// button styling
              const allButtons = buttonContainer.querySelectorAll('.selection');
              allButtons.forEach(b => b.classList.remove('active'));
              this.classList.add('active');
            }
          });
          
// Make first button active by default
          if (index === 0) {
            btn.classList.add('active');
          }
          
          buttonContainer.appendChild(btn);
        });

    
        textWrapper.appendChild(buttonContainer);

  
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