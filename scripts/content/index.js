document.addEventListener('DOMContentLoaded', () => {
  //
  // ================================
  // HERO SECTION
  // ================================
  //
  const heroTitle = document.querySelector('#hero-title h1');
  if (heroTitle)
  {
    heroTitle.textContent = 'Championing Growth';
  }


  //
  // ================================
  // HOMEPAGE POWERPOINT SLIDESHOW
  // ================================
  //

  const powerpointImg = document.querySelector('#powerpoint figure img');

  const images = [
      'assets/img2.jpg',
      'assets/goal12.png',
      'assets/life-below-water.jpg'
    ];

    let currentImageIndex = 0;
    const slideInterval = 4000; // in milliseconds

    // Add CSS transitions for sliding effect
    powerpointImg.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';

    // Initialize slideshow
    powerpointImg.src = images[currentImageIndex];
    setInterval(slideToNextImage, slideInterval);

  // Function to update image source
  function updateImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    powerpointImg.src = images[currentImageIndex];
  }

  // Function to animate slide transition
  function slideToNextImage() {
    // Slide current image left (out)
    powerpointImg.style.transform = 'translateX(-100%)';
    powerpointImg.style.opacity = 0;

    setTimeout(() => {
      // Move image off-screen to the right (reset position)
      powerpointImg.style.transition = 'none';
      powerpointImg.style.transform = 'translateX(100%)';
      updateImage();

      // Re-enable transition and bring image into view
      requestAnimationFrame(() => {
        powerpointImg.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
        powerpointImg.style.transform = 'translateX(0)';
        powerpointImg.style.opacity = 1;
      });
    }, 800);
  }


  //
  // ================================
  // HOMEPAGE GOALS SECTION
  // ================================
  //
  const goals = [
    {
      titleEl: document.getElementById('goal-box-title-1'),
      boxEl: document.getElementById('goal-box-1'),
      linkEl: document.querySelector('#goal-link1'),
      title: 'Life Below Water',
      href: '/missions.html#mission-1',
      color: '#bf616a'
    },
    {
      titleEl: document.getElementById('goal-box-title-2'),
      boxEl: document.getElementById('goal-box-2'),
      linkEl: document.querySelector('#goal-link2'),
      title: 'Clean Water and Sanitisation',
      href: '/missions.html#mission-2',
      color: '#d08770'
    },
    {
      titleEl: document.getElementById('goal-box-title-3'),
      boxEl: document.getElementById('goal-box-3'),
      linkEl: document.querySelector('#goal-link3'),
      title: 'Responsible Consumption and Production',
      href: '/missions.html#mission-3',
      color: '#a3be8c'
    }
  ];

  if (document.getElementById('goal-box-title-1')) {
    goals.forEach(goal => {
      goal.titleEl.textContent = goal.title;
      goal.boxEl.style.backgroundColor = goal.color;
      goal.linkEl.href = goal.href;
    });
  }


  //
  // ================================
  // VIEW ALL BUTTON
  // ================================
  //
  const viewGoalsButtonLink = document.querySelector('#button-container a');
  if (viewGoalsButtonLink) {
    viewGoalsButtonLink.setAttribute('href', 'goals.html');
  }

  const viewGoalsButton = document.querySelector('#button-container a button');
  if (viewGoalsButton) {
    viewGoalsButton.textContent = 'View All';
  }


  //
  // ================================
  // INFO SECTION STUFF
  // ================================
  //

  // Title
  const infoTitle = document.querySelector('#info-section h1');

  // Images
  const infoImageRow1 = document.querySelector('.info-row.row-1 img');
  const infoImageRow2 = document.querySelector('.info-row.row-2 img');
  const infoImageRow3 = document.querySelector('.info-row.row-3 img');

  if (infoImageRow1 && infoImageRow2 && infoImageRow3) {
    infoImageRow1.src = 'assets/clean-water.jpg';
    infoImageRow2.src = 'assets/life-below-water.jpg';
    infoImageRow3.src = 'assets/responsible-consumption-production.jpg';
  }

  // Content
  const infoTitleRow1 = document.querySelector('.info-row.row-1 div h2');
  const infoParaRow1 = document.querySelector('.info-row.row-1 div p');

  const infoTitleRow2 = document.querySelector('.info-row.row-2 div h2');
  const infoParaRow2 = document.querySelector('.info-row.row-2 div p');

  const infoTitleRow3 = document.querySelector('.info-row.row-3 div h2');
  const infoParaRow3 = document.querySelector('.info-row.row-3 div p');

  if (infoTitle)
  {
    infoTitle.textContent = 'Our Sustainability Efforts';
    infoTitleRow1.textContent = 'Clean Water Solutions';
    infoParaRow1.textContent = 'We’re investing in innovative water purification systems to ensure communities have access to clean, safe drinking water worldwide.';

    infoTitleRow2.textContent = 'Preserving Marine Life';
    infoParaRow2.textContent = 'Our initiatives aim to protect and restore marine ecosystems through sustainable practices, awareness, and community collaboration.';

    infoTitleRow3.textContent = 'Preserving Marine Life';
    infoParaRow3.textContent = 'Our initiatives aim to protect and restore marine ecosystems through sustainable practices, awareness, and community collaboration.';
  }
});
