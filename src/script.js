const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '⬆';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.display = 'none';
scrollTopButton.style.zIndex = '1000';
scrollTopButton.style.padding = '10px';
scrollTopButton.style.borderRadius = '50%';
scrollTopButton.style.backgroundColor = '#0E7F57';
scrollTopButton.style.color = '000';
scrollTopButton.style.border = 'none';

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});