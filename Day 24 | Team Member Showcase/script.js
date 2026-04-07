// 1. Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  // Switch icon between Moon and Sun
  if (body.classList.contains('light-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// 2. Modal Logic
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach(card => {
  card.addEventListener('click', () => {
    // Extract info from the clicked card
    const name = card.querySelector('h3').innerText;
    const role = card.querySelector('.role').innerText;
    const img = card.querySelector('.profile-img img').src;
    const bio = card.querySelector('.bio').innerText;

    // Inject info into the modal
    modalBody.innerHTML = `
      <img src="${img}" style="width:120px; border-radius:50%; border:4px solid var(--primary-color); margin-bottom:15px;">
      <h2 style="color:var(--primary-color)">${name}</h2>
      <p style="font-weight:bold; margin-bottom:15px;">${role}</p>
      <p>${bio} This is an extended biography for the JavaScript project showcase.</p>
    `;

    // Show the modal
    modalOverlay.style.display = 'flex';
  });
});

// Close modal when clicking 'X' or outside the box
closeModal.addEventListener('click', () => modalOverlay.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modalOverlay) modalOverlay.style.display = 'none';
});