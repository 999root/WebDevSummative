document.addEventListener('DOMContentLoaded', async () => {

  try {
    const response = await fetch('scripts/json/index.json');
    const data = await response.json();


    // ================================
    // HERO SECTION
    // ================================
    const heroTitle = document.querySelector('#hero-title h1');
    if (heroTitle && data.hero?.title) {
      heroTitle.textContent = data.hero.title;
    }


    // ================================
    // HOMEPAGE SLIDESHOW
    // ================================
    const powerpointImg = document.querySelector('#powerpoint figure img');

    if (powerpointImg && data.slideshow?.images?.length) {

      const images = data.slideshow.images;
      const slideInterval = data.slideshow.interval || 4000;

      let currentImageIndex = 0;

      powerpointImg.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
      powerpointImg.src = images[currentImageIndex];

      function updateImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        powerpointImg.src = images[currentImageIndex];
      }

      function slideToNextImage() {
        powerpointImg.style.transform = 'translateX(-100%)';
        powerpointImg.style.opacity = 0;

        setTimeout(() => {
          powerpointImg.style.transition = 'none';
          powerpointImg.style.transform = 'translateX(100%)';
          updateImage();

          requestAnimationFrame(() => {
            powerpointImg.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
            powerpointImg.style.transform = 'translateX(0)';
            powerpointImg.style.opacity = 1;
          });
        }, 800);
      }

      setInterval(slideToNextImage, slideInterval);
    }


    // ================================
    // HOMEPAGE GOALS
    // ================================
    const goals = data.goals || [];

    goals.forEach((goal, index) => {

      const titleEl = document.getElementById(`goal-box-title-${index + 1}`);
      const boxEl   = document.getElementById(`goal-box-${index + 1}`);
      const linkEl  = document.querySelector(`#goal-link${index + 1}`);

      if (titleEl) titleEl.textContent = goal.title;
      if (boxEl) boxEl.style.backgroundColor = goal.color;
      if (linkEl) linkEl.href = goal.href;
    });


    // ================================
    // VIEW ALL BUTTON
    // ================================
    const viewGoalsButtonLink = document.querySelector('#button-container a');
    const viewGoalsButton = document.querySelector('#button-container a button');

    if (viewGoalsButtonLink) viewGoalsButtonLink.href = data.viewAll.href;
    if (viewGoalsButton) viewGoalsButton.textContent = data.viewAll.text;


    // ================================
    // INFO SECTION
    // ================================
    const infoTitle = document.querySelector('#info-section h1');
    if (infoTitle) infoTitle.textContent = data.infoSection.title;

    data.infoSection.rows.forEach((row, index) => {

      const rowNum = index + 1;

      const img   = document.querySelector(`.info-row.row-${rowNum} img`);
      const title = document.querySelector(`.info-row.row-${rowNum} div h2`);
      const para  = document.querySelector(`.info-row.row-${rowNum} div p`);

      if (img) img.src = row.image;
      if (title) title.textContent = row.title;
      if (para) para.textContent = row.description;
    });


  } catch (error) {
    console.error('Error loading index.json:', error);
  }

});
